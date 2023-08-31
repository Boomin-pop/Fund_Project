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

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminCategoryController {
    @Autowired
    private AdminCategoryService acservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/category")
    public String adminCategory(Model model){
        List<JobDTO> jlist = acservice.jobList();
        List<AdminServiceTypeDTO> tlist = acservice.typeList();
        List<AdminCategoryDTO> clist = acservice.categoryList();

        List<AdminCategoryDTO> culist = new ArrayList<>();
        List<AdminCategoryDTO> cdlist = new ArrayList<>();

        for(AdminCategoryDTO cdto: clist){
            if(cdto.getCategoryUpperId() == cdto.getCategoryId()){
                culist.add(cdto);
            }else{
                cdlist.add(cdto);
            }
        }

        model.addAttribute("jlist", jlist);
        model.addAttribute("tlist", tlist);
        model.addAttribute("culist", culist);
        model.addAttribute("cdlist", cdlist);

        return "admin/adminCategory";
    }
    // 직업 리스트 관리
    // ajax이용 직업 리스트 불러오기
    @GetMapping("/category/job/list")
    public @ResponseBody List<JobDTO> jobList() {
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
    // 카테고리 삽입
    @PostMapping("/category/insert")
    public @ResponseBody String insertCategory(@RequestBody AdminCategoryDTO cdto){
        int n = acservice.insertCategory(cdto);
        return n >= 1 ? "success" : "fail";
    }
    //카테고리 수정
    @PostMapping("/category/update")
    public @ResponseBody String modifyCategory(@RequestBody AdminCategoryDTO cdto){
        System.out.println("cdto = " + cdto);
        int n = acservice.modifyCategory(cdto);
        return 1 >= 1 ? "success" : "fail";
    }
    // 카테고리 제거
    @DeleteMapping("/category/{cid}")
    public @ResponseBody String categoryRemove(@PathVariable("cid") int cid){

        int n = acservice.removeCategory(cid);
        return n == 1 ? "success" : "fail";
    }
    @DeleteMapping("/category/U/{cid}")
    public @ResponseBody String categoryRemoveU(@PathVariable("cid") int cid){
        int n = acservice.removeCategoryU(cid);
        return n == 1 ? "success" : "fail";
    }
}
