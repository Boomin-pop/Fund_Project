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

//    삭제 사유
    @PostMapping("/admin/user/{userId}")
    public @ResponseBody String adminUserDeleteR(@RequestBody UserDTO userDTO){
        adminUserService.userDeleteR(userDTO);
        return null;
    }

    @PostMapping("/admin/user/delete")
    public @ResponseBody String deleteUser(
            @RequestBody List<UserDTO> list){

        for (UserDTO userDTO : list){
            System.out.println("dto = " + userDTO);
            adminUserService.deleteUser(userDTO);
//            adminUserService.deleteUser(str);
//            System.out.println("str" + str);
        }
        return null;
    }

    @PostMapping("/admin/user/cancle")
    public @ResponseBody String userCancle(@RequestBody List<UserDTO> list){
        for (UserDTO userDTO : list){
            adminUserService.userCancle(userDTO);
        }
        return null;
    }
}

