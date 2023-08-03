package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public String getList(Model model) {

        List<UserDTO> list = userService.getList();
        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~> list = " + list);
        model.addAttribute("list", list);

        return "/user/user";
    }


}
