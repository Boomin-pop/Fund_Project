package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class HomeController {


    @GetMapping("/")
    public String home(){
        return "/mainpage/home";
    }


}
