package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.TopHeaderCategoryDTO;
import com.kmong.kmongdemo.service.TopHeaderCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/header")
public class TopHeaderCategoryController {
    @Autowired
    TopHeaderCategoryService service;

    @GetMapping("/categoryList")
    public @ResponseBody ArrayList<TopHeaderCategoryDTO> TopHeaderCategory(Model model) {
        ArrayList<TopHeaderCategoryDTO> list = service.getCategoryList();

        System.out.println("list = " + list);

        model.addAttribute("list", list);
        model.addAttribute("test", "teeeeeest");


        return list;
    }
}
