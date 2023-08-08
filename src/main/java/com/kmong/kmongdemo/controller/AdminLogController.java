package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.TransactionLogDTO;
import com.kmong.kmongdemo.service.AdminCategoryService;
import com.kmong.kmongdemo.service.AdminLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminLogController {
    @Autowired
    private AdminLogService alservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/transactionLog")
    public String adminTransaction(Model model){
        List<TransactionLogDTO> trlist = alservice.transactionList();
        model.addAttribute("transactionList", trlist);
        System.out.println("trlist = " + trlist);
        return "admin/adminTransaction";
    }
    @GetMapping("/signLog")
    public String adminSign(Model model){
        return "admin/adminSignLog";
    }
}
