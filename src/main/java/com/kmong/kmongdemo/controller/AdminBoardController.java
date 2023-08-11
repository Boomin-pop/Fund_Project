package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.*;
import com.kmong.kmongdemo.service.AdminBoardService;
import com.kmong.kmongdemo.service.AdminLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminBoardController {
    @Autowired
    private AdminBoardService abservice;

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/board")
    public String adminBoard(Model model){
        List<BoardCategoryDTO> bclist = abservice.categoryList();
        model.addAttribute("bclist",bclist);

        return "admin/adminBoard";
    }
    @GetMapping("/board/section/{cid}")
    public @ResponseBody List<BoardSectionDTO> sectionList(@PathVariable("cid") int cid){
        System.out.println("cid = " + cid);
        List<BoardSectionDTO> bslist = abservice.sectionList(cid);

        return bslist;
    }

}
