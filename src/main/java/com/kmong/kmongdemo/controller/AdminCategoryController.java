package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.JobDTO;
import lombok.RequiredArgsConstructor;

import com.kmong.kmongdemo.service.AdminCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminCategoryController {
    @Autowired
    private AdminCategoryService acservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/category")
    public String adminCategory(Model model){
        return "admin/adminCategory";
    }
    // ajax이용 직업 리스트 불러오기
    @GetMapping("/category/job/list")
    public @ResponseBody List<JobDTO> jobList(Model model){
        List<JobDTO> jlist = acservice.jobList();
        return jlist;
    }
}
