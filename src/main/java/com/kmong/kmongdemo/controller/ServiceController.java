package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/service")
@Controller
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @GetMapping("/serviceReg")
    public String serviceInput(Model model) {
        List<CategoryDTO> topCatList = serviceService.topCatList();
        System.out.println("topCatList = " + topCatList);
        model.addAttribute("topCatList", topCatList);


        return "service/serviceInput";

    }
}
