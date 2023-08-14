package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import lombok.RequiredArgsConstructor;

import com.kmong.kmongdemo.service.AdminCategoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminCategoryController {
    @Autowired
    private AdminCategoryService acservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/category")
    public String adminCategory(){
        return "admin/adminCategory";
    }
    // 직업 리스트 관리
    // ajax이용 직업 리스트 불러오기
    @GetMapping("/category/job/list")
    public @ResponseBody List<JobDTO> jobList(Model model) {
        List<JobDTO> jlist = acservice.jobList();
        return jlist;
    }
    @PostMapping("/category/job/insert")
    public @ResponseBody String jobInsert(@RequestBody String jname){
        int n = acservice.insertJob(jname);
        return n == 1 ? "success" : "fail";
    }
    @DeleteMapping("/category/job/{jid}")
    public @ResponseBody String jobRemove(@PathVariable("jid") int jid){
        int n = acservice.removeJob(jid);
        return n == 1 ? "success" : "fail";
    }

    // ajax 서비스 타입 관리
    @GetMapping("/category/servicetype/list")
    public @ResponseBody List<AdminServiceTypeDTO> typeList(Model model){
        List<AdminServiceTypeDTO> tlist = acservice.typeList();
        return tlist;
    }
    @PostMapping("/category/servicetype/insert")
    public @ResponseBody String typeInsert(@RequestBody AdminServiceTypeDTO tdto){
        System.out.println("tdto = " + tdto);
        int n = acservice.insertType(tdto);
        return n == 1 ? "success" : "fail";
    }
    @DeleteMapping("/category/servicetype/{tid}")
    public @ResponseBody String typeRemove(@PathVariable("tid") int tid){
        int n = acservice.removeType(tid);
        return n == 1 ? "success" : "fail";
    }

    // 분야 카테고리 관리
    // ajax list 불러오기
    @GetMapping("/category/list")
    public @ResponseBody List<AdminCategoryDTO> categoryList(){
        List<AdminCategoryDTO> clist = acservice.categoryList();
        return clist;
    }
    // ajax 카테고리 불러오기
    @GetMapping("/category/{cid}")
    public @ResponseBody AdminCategoryDTO categoryView(@PathVariable("cid") int cid){
        AdminCategoryDTO Cdto = acservice.categoryView(cid);
        return Cdto;
    }
}
