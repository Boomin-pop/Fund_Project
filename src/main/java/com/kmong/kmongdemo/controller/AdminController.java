package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.service.AdminCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminController {
    @GetMapping("admin")
    public String adminhome(){
        return "admin/adminHome";
    }
}
