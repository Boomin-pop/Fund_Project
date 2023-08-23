package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.ServiceDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {

    @Autowired
    ServiceService serviceService;

    @GetMapping("/")
    public String home(Model model){
        List<ServiceDTO> serviceList = serviceService.serviceList();
        model.addAttribute("serviceList", serviceList);

        return "home";
    }

    @GetMapping("/mainpage")
    public String mainpage(){
        return "/mainpage/home";
    }

}
