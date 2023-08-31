package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.*;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
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
    public String serviceInput(Model model) {
      //  String splId = (String)session.getAttribute("splId");
        //System.out.println("전문가 id : "+splId);
        List<ServiceCategoryDTO> topCatList = serviceService.topCatList();
      //  System.out.println("topCatList = " + topCatList);
      //  model.addAttribute("splId", splId);
        model.addAttribute("topCatList", topCatList);
        return "service/serviceBody";
    }

    @GetMapping("/{serviceID}")
    public String serviceInfo(@PathVariable int serviceID, Model model){
        List<ServiceDTO> serviceInfo = serviceService.serviceInfo(serviceID);
       
        model.addAttribute("serviceInfo", serviceInfo);
        return "service/serviceView";
    }

    // @PostMapping("/serviceReg")
    //    public String serviceInput(MultipartHttpServletRequest mhr){
    //        System.out.println("인풋 요청 컨트롤러!!");
    //        serviceService.serviceInput(mhr);
    //
    //        return "redirect:serviceInputComplete";
    //    }


    @PostMapping("/serviceReg")
   // public String serviceInput(MultipartHttpServletRequest mhr, Map txtMap, Map imgMap){
    public String serviceInput(MultipartHttpServletRequest mhr){
        System.out.println("Request Process Commence!!!");
        String savePath = "/static/imgs";
        String getSplID = mhr.getParameter("splID");
        String getServiceTitle = mhr.getParameter("serviceTitle");
        System.out.println("splIDTest = " + getSplID);
        Map txtMap = new HashMap();
        Map imgMap = new HashMap();
        int Result = 0;
        String realPath = mhr.getServletContext().getRealPath(savePath);
        System.out.println(realPath);
        int maxSize = 1024 * 1024 * 500; // 1kb * 1kb = 1MB*10 = 10MB
        Enumeration<String> enu = mhr.getParameterNames();
        while (enu.hasMoreElements()) {
            String paramName = enu.nextElement();
            String paramValue = mhr.getParameter(paramName);
            System.out.println(paramName + ":" + paramValue);
            txtMap.put(paramName, paramValue);
        }
        //String splIDAfter = (String) txtMap.get("splID");
//        System.out.println("splIDAfter = " + splIDAfter);

            // 이유는 모르겠으나 Enumeration에서 splID와 serviceTitle을 읽어오지 못함.
//            txtMap.put("splID", getSplID);
//            txtMap.put("serviceTitle", getServiceTitle);

        Result = serviceService.serviceTextInput(txtMap);
        System.out.println("(0=faild, 1orHigher=Succed)Result = " + Result);
        if(Result>0){
            System.out.println("Begin Input Images!!!");
            Iterator<String> iter = mhr.getFileNames();
            imgMap.put("splID", getSplID);
            imgMap.put("serviceTitle", getServiceTitle);
            while(iter.hasNext()) {
                String fileParamName = iter.next();
                System.out.println("fileParamName : " + fileParamName);

                // MultipartFile : 파일정보를 갖고 있는 객체
                MultipartFile mFile= mhr.getFile(fileParamName);

                String originName = mFile.getOriginalFilename();
                System.out.println("originName : " + originName);

                File file = new File(realPath +"\\"+ fileParamName);
                System.out.println("file = " + file);
                if(mFile.getSize() !=0) { // 업로드된 경우
                    if(!file.exists()) { // 파일이 존재하지 않으면 최초로 한번만 실행
                        if(file.getParentFile().mkdir()) { // savePath에 지정된 폴더(fileRepo) 생성
                            try {
                                file.createNewFile();
                            } catch (IOException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            } // 임시파일 생성
                        }//if
                    }//if

                    File uploadFile = new File(realPath +"\\"+originName);

                    // 중복시 파일명 대체
                    if(uploadFile.exists()) {
                        originName = System.currentTimeMillis()+"_"+originName;
                        uploadFile = new File(realPath +"\\"+originName);
                    }	// if
                    // 실제 파일 업로드하기
                    try {
                        mFile.transferTo(uploadFile);
                    } catch (IllegalStateException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } catch (IOException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                    //fileList.add(originName);
                }
                imgMap.put(fileParamName, originName);
            }

            serviceService.serviceImgInput(imgMap);
        }
            return "redirect:serviceInputComplete";
    }

    @GetMapping("serviceInputComplete")
    public String serviceInputComplete(){

        return "service/serviceInputComplete";
    }
//    @PostMapping("/temporarySave")
//    public void temporarySave(MultipartHttpServletRequest mhr){
//        System.out.println("임시 저장 요청");
//        serviceService.serviceTempSave(mhr);
//    }



    @PostMapping("/chkedServiceType")
    public  @ResponseBody List<ServiceTypeDTO> chkedServiceType(@RequestBody ServiceCategoryDTO cDto, Model model){

        String code = cDto.getServiceTopCatCode();
          System.out.println("code = " + code);
          ServiceTypeChkDTO stcDTO = serviceService.serviceTypeChkList(code);
            System.out.println("서비스타입 체크된 코드들 = " + stcDTO +"\n");
        List<ServiceTypeDTO> serviceTypeList = serviceService.serviceTypeList();
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


}
