package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.JobCategory;
import com.kmong.kmongdemo.service.AdminCategoryServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminCategoryController {
    @Autowired
    private AdminCategoryServiceImpl acservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/category")
    public String adminCategory(Model model){
        return "admin/adminCategory";
    }
    @GetMapping("/category/job/list")
    public @ResponseBody List<JobCategory> jobList(Model model){
        List<JobCategory> jlist = acservice.getJob();
        return jlist;
    }
}
