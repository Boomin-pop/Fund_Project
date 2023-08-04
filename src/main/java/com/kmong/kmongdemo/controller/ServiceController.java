package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

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

    @GetMapping("/chkedServiceType/")
    public void chkedServiceType(String code, Model model){
            ServiceTypeChkDTO stcDTO = serviceService.serviceTypeChkList(code);
            System.out.println("stcDTO = " + stcDTO);
            Map<String, String> selectedType = new HashMap<>();
            String tc1 = stcDTO.getServiceTypeCode1();
            String sttt = "getServiceTypeCode";

            try {
                Object obj = stcDTO;
                for (Field field : obj.getClass().getDeclaredFields()) {
                    field.setAccessible(true);
                    Object value = field.get(obj);
                    System.out.println(field.getName() + ", " + value);
                }
            }catch (Exception e){
                e.printStackTrace();


           // serviceService.serviceTypeList(tc1);

//        for(int i=0; i<chkedType.getServiceTypeChkCount(); i++){
//
//            String selCode = chkedType.getServiceTypeCode(i);
//            ServiceTypeDTO stDTO = serviceService.selectedServiceType
//            selectedType.put(chkedType.getServiceTypeCode1(), )
//        }
//        List<ServiceTypeDTO> serviceTypelist = serviceService.serviceTypeList();
//
//
//        for(ServiceTypeDTO stDto : sreviceTypeList){
//        selectedType.put(chkedType.getServiceTypeCode1(),
//
//        );



        }
    }
}
