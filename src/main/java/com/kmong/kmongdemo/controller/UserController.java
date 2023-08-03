package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/joinMethod")
    public String userJoin() {

    return "/user/userJoin";
}

    @GetMapping("/joinChoice")
    public String userJoin2(){

        return "user/userJoin2";
    }

    @GetMapping("/userRegister")
    public String joinClient(Model model){
        List<JobDTO> jobList = userService.jobList();
        System.out.println("jobList = " + jobList);
        model.addAttribute("jobList", jobList);

        return "user/joinClient";
    }










}
