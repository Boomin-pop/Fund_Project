package com.kmong.kmongdemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminProjectController {
    @GetMapping("/admin/project")
    public String adminProject(){
        return "admin/adminProject";
    }
}
