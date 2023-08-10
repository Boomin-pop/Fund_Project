package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class AdminUserController {
    @Autowired
    private AdminUserService adminUserService;

    @GetMapping("/admin/user")
    public String adminUser(Model model){

        List<UserDTO> userLists = adminUserService.userLists();
        model.addAttribute("userLists", userLists);
        List<UserDTO> userDeleteLists=adminUserService.userDeleteLists();
        model.addAttribute("userDeleteLists", userDeleteLists);

        return "admin/adminUser";
    }


    @GetMapping("/admin/user/{userId}")
    public @ResponseBody UserDTO adminUserInfo(@PathVariable("userId") String userId, Model model){
        UserDTO userInfo = adminUserService.userInfo(userId);
        return userInfo;
    }

    @PutMapping("/admin/user/{userId}")
    public @ResponseBody String aminUserModify(@RequestBody UserDTO userDTO){
        adminUserService.userModify(userDTO);
        return null;
    }

    @PostMapping("/admin/user/{userId}")
    public @ResponseBody String adminUserDeleteR(@RequestBody UserDTO userDTO){
        adminUserService.userDeleteR(userDTO);
        return null;
    }

    @DeleteMapping("/admin/user/{userId}")
    public @ResponseBody String deleteUser(@RequestBody UserDTO userDTO){
        adminUserService.deleteUser(userDTO);
        System.out.println("userDTO = " + userDTO);
        return null;
    }

//    @PutMapping("/admin/user/{userId}")
//    public  @ResponseBody String userCancle(@RequestBody UserDTO userDTO){
//        adminUserService.userCancle(userDTO);
//        return null;
//    }
}

