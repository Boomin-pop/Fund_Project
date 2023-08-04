package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.JobCategory;
import com.kmong.kmongdemo.service.AdminCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AdminCategoryController {
    @Autowired
    private AdminCategoryService acservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
//    @GetMapping("admin/category")
//    public String adminCategory(Model model){
//        List<JobCategory> jlist = acservice.getJob();
//        model.addAttribute("jobList", jlist);
//        return "admin/adminCategory";
//    }
}
