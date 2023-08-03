package com.kmong.kmongdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminUserController {
    @GetMapping("/admin/user")
    public String adminUser(){
        return "admin/adminUser";
    }
}
