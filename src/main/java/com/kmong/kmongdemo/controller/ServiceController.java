package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/service")
@Controller
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping("/serviceReg")
    public String serviceInput(Model model, HttpSession session) {
        List<CategoryDTO> topCatList = serviceService.topCatList();
        System.out.println("topCatList = " + topCatList);
        model.addAttribute("topCatList", topCatList);
        return "service/serviceInput";
    }

    @PostMapping("/chkedServiceType")
    public void chkedServiceType(@RequestBody CategoryDTO cDto, Model model){

        String code = cDto.getServiceTopCatCode();
          System.out.println("code = " + code);
          ServiceTypeChkDTO stcDTO = serviceService.serviceTypeChkList(code);
            System.out.println("서비스타이프 체크된 코드들 = " + stcDTO);
            //List<ServiceTypeDTO> = serviceService.serviceTypeList();
            //Map<String, String> serviceTypeList = new HashMap<>();
        Map<String, String> serviceTypeList = serviceService.serviceTypeList();

         //       System.out.println("serviceTypeList = " + serviceTypeList);
        Map<String, String> selectedType = new HashMap<>();

            try {
                Object obj = stcDTO;
                for (Field field : obj.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    Object key = field.getName();
                    Object objValue = field.get(obj);
                    if(objValue.equals(""))
                        break;

                    System.out.println("key : " + key + ", value : " + objValue);

                    if(!key.equals("serviceTypeChkCode") && !objValue.equals("")){
                 //       for(String typeKey: serviceTypeList.keySet()){
                          for(Map.Entry<String, String> typeList : serviceTypeList.entrySet()){
                              if(objValue.equals(typeList.getKey())){
                                selectedType.put(typeList.getKey(), typeList.getValue());
                                       }
                                   }
                        }
                    System.out.println("selectedType = " + selectedType);
                }
            }catch (Exception e){
                e.printStackTrace();





        }
    }
}
