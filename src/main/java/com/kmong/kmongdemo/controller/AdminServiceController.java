package com.kmong.kmongdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminServiceController {
    @GetMapping("/admin/service")
    public String adminService(){
        return "admin/adminService";
    }
}
