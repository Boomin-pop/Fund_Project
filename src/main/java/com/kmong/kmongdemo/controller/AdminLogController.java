package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.PagingDTO;
import com.kmong.kmongdemo.domain.SignLogDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;
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
    public String adminTransaction(Model model, @RequestParam(defaultValue = "1") int page
                                              , @RequestParam(defaultValue = "transactionId") String by
                                              , @RequestParam(defaultValue = "desc") String ud
                                              , @RequestParam(defaultValue = "") String id){
        String query = "ORDER BY " + by+ " " + ud;
        int totalLogCnt = alservice.transactionCount();
        PagingDTO paging = new PagingDTO(totalLogCnt, page, 20, 5);

        int startIndex = paging.getIndex();
        int pageSize = paging.getDataPerPage();

        List<TransactionLogDTO> trlist = alservice.transactionList(startIndex, pageSize, query, id);

        model.addAttribute("transactionList", trlist);
        model.addAttribute("LogPage", paging);
        model.addAttribute("by", by);
        model.addAttribute("ud",ud);
        model.addAttribute("id", id);

        return "admin/adminTransactionLog";
    }
    @GetMapping("/signLog")
    public String adminSign(Model model, @RequestParam(defaultValue = "1") int page
                                       , @RequestParam(defaultValue = "signLogTime") String by
                                       , @RequestParam(defaultValue = "desc") String ud
                                       , @RequestParam(defaultValue = "") String id){

        String query = "ORDER BY " + by+ " " + ud;
        int totalLogCnt = alservice.SignCount();
        PagingDTO paging = new PagingDTO(totalLogCnt, page, 20, 5);

        int startIndex = paging.getIndex();
        int pageSize = paging.getDataPerPage();

        List<SignLogDTO> slist = alservice.SignList(startIndex, pageSize, query, id);

        model.addAttribute("signList", slist);
        model.addAttribute("LogPage", paging);
        model.addAttribute("by", by);
        model.addAttribute("ud",ud);
        model.addAttribute("id", id);
        return "admin/adminSignLog";
    }
}
