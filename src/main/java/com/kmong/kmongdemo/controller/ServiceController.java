package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.IOException;
import java.lang.reflect.Field;
import java.util.*;

@RequestMapping("/service")
@Controller
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping("/serviceReg")
    public String serviceInput(Model model, HttpSession session) {
        List<CategoryDTO> topCatList = serviceService.topCatList();
      //  System.out.println("topCatList = " + topCatList);
        model.addAttribute("topCatList", topCatList);
        return "service/serviceBody";
    }

    @PostMapping("/chkedServiceType")
    public  @ResponseBody List<ServiceTypeDTO> chkedServiceType(@RequestBody CategoryDTO cDto, Model model){

        String code = cDto.getServiceTopCatCode();
          System.out.println("code = " + code);
          ServiceTypeChkDTO stcDTO = serviceService.serviceTypeChkList(code);
            System.out.println("서비스타입 체크된 코드들 = " + stcDTO +"\n");
            //List<ServiceTypeDTO> = serviceService.serviceTypeList();
            //Map<String, String> serviceTypeList = new HashMap<>();
        //Map<String, String> serviceTypeList = serviceService.serviceTypeList();
        List<ServiceTypeDTO> serviceTypeList = serviceService.serviceTypeList();
        //System.out.println("serviceTypeList = " + serviceTypeList);
        List<ServiceTypeDTO> chkedTypeList = new ArrayList<>();
        Map<String, String> chkedServiceType = new HashMap<>();
        try {
                Object obj = stcDTO;
                for (Field field : obj.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    Object key = field.getName();
                    Object objValue = field.get(obj);
                    if(objValue.equals(""))
                        break;

                    System.out.println("chkDTO_key : " + key + ", chkDTO_value : " + objValue);
                    if(!key.equals("serviceTypeChkCode") && !objValue.equals("")){
                        for(int i=0; i<serviceTypeList.size(); i++) {
                            if (objValue.equals(serviceTypeList.get(i).getServiceTypeCode())){
                           ServiceTypeDTO stDTO = new ServiceTypeDTO();
                           stDTO.setServiceTypeCode(serviceTypeList.get(i).getServiceTypeCode());
                           stDTO.setServiceTypeName(serviceTypeList.get(i).getServiceTypeName());
                           stDTO.setMandatoryInput(serviceTypeList.get(i).getMandatoryInput());
                           chkedTypeList.add(stDTO);
                            }
                        }
                    }
                    System.out.println("chkedTypeListDTO = " + chkedTypeList);
                }


        //       System.out.println("serviceTypeList = " + serviceTypeList);
//        Map<String, String> chkedServiceType = new HashMap<>();
//        Map<String, Integer> mandatoryInput = new HashMap<>();
//            try {
//                Object obj = stcDTO;
//                for (Field field : obj.getClass().getDeclaredFields()) {
//                    field.setAccessible(true);
//                    Object key = field.getName();
//                    Object objValue = field.get(obj);
//                    if(objValue.equals(""))
//                        break;
//
//                    System.out.println("key : " + key + ", value : " + objValue);
//
//                    if(!key.equals("serviceTypeChkCode") && !objValue.equals("")){
//                 //       for(String typeKey: serviceTypeList.keySet()){
//                          for(Map.Entry<String, String> typeList : serviceTypeList.entrySet()){
//                              if(objValue.equals(typeList.getKey())) {
//                                  chkedServiceType.put(typeList.getKey(), typeList.getValue());
//                                  for (Map.Entry<String, Integer> mandatoryList : serviceTypeMandList.entrySet()) {
//                                      if (typeList.getKey().equals(mandatoryList.getKey())) {
//                                          mandatoryInput.put(mandatoryList.getKey(), mandatoryList.getValue());
//                                      }
//                                  }
//                              }
//                                   }
//                        }
//                    System.out.println("selectedType = " + chkedServiceType);
//                    System.out.println("mandatoryInput = " + mandatoryInput);
//                }
            }catch (Exception e){
                e.printStackTrace();}

//        return (List<ServiceTypeDTO>) chkedServiceType;
        return (List<ServiceTypeDTO>) chkedTypeList;
    }

    //파일 업로드시 필요한 api : Apache Commons FileUpload
    @PostMapping("/upload.do")
    public @ResponseBody Map upload(MultipartHttpServletRequest mhr,
                         HttpServletRequest request) throws IOException {

        String repo = "resources/imgs";

        // 서버의 실제 물리경로 얻어오기
        String savePath = request.getServletContext().getRealPath("")+ File.separator+repo;
        //separator = 운영체제에 따라 경로(//리눅스, \\윈도우)를 다르게 써줌.

        System.out.println(savePath);

        Map map = new HashMap();

        // 파라미터로 넘어온 mhr파일의 정보를 확인해볼 수 있음.
        Enumeration<String> enu = mhr.getParameterNames();
        //mhr의 특징 : 텍스트파일, 바이너리 파일에 대한 정보를 모두 얻어올 수 있다.
        // 2개의 정보를 동시에 받기위해 mhr을 사용하는 것

        // 일반 텍스트 파일의 파라미터명(key), 해당 파라미터명의 value값을 가져옴
        while(enu.hasMoreElements()) {
            String paramName = enu.nextElement();
            String paramValue = mhr.getParameter(paramName);

            System.out.println(paramName + ":" + paramValue);
            // 파라미터 키값과 밸류값( id:test name:홍길동 )을 저장함
            map.put(paramName, paramValue);
        }

        //파일에 대한 정보
        // 이터레이터 돌리는 법 : hasNext()
        Iterator<String> iter = mhr.getFileNames();
        List<String> fileList = new ArrayList<String>();
        while(iter.hasNext()) {
            String fileParamName = iter.next();
            System.out.println("fileParamName : "+fileParamName);


            //파일의 파라미터이름을 가져오면 MultipartFile 타입으로 파일의 정보를 가져올 수 있음/
            //MultipartFile = 파일 정보를 갖고 있는 객체
            MultipartFile mFile = mhr.getFile(fileParamName);
            // 이 객체만 있으면 파일의 이름과 크기등도 알 수 있음.

            //실제 올릴때 파일이름
            String originName = mFile.getOriginalFilename();
            System.out.println("originName : "+ originName);

            File file = new File(savePath + "\\" + fileParamName);
            // 이렇게 생성한 파일객체를 이용해
            if(mFile.getSize() !=0) { // 해당 파일이 실제 업로드된 경우
                if(!file.exists()) { // 실제 이 경로에 파일이 존재하지 않으면 최초로 한번만 실행
                    if(file.getParentFile().mkdir()) {     //디렉토리를 만들면 exists가 true 리턴
                        //savePath에 지정된 폴더(fileRepo)생성
                        file.createNewFile(); //임시파일 생성.
                    } // if getParent
                }  // if exists

                File uploadFile = new File(savePath + "\\" +originName);

                //중복처리 중복시 파일명 대체
                if(uploadFile.exists()) {
                    originName = System.currentTimeMillis()+"_"+originName;
                    uploadFile = new File(savePath + "\\" +originName);
                }

                // 실제 파일을 업로드 하기
                mFile.transferTo(uploadFile);
                fileList.add(originName);
            } // if getsize

        }

        map.put("fileList", fileList);  // 파일리스트 추가

        //텍스트 + 파일리스트 2개 다 map에 담아 보낸 것


        return map;
    }
}
