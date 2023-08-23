package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.ServiceCategoryDTO;
import com.kmong.kmongdemo.domain.ServiceDTO;
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

    @PostMapping("/serviceReg")
    public String serviceInput(MultipartHttpServletRequest mhr){
        System.out.println("인풋 요청 컨트롤러!!");
        serviceService.serviceInput(mhr);
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


}
