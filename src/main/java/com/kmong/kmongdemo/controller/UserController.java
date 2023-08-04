package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.UUID;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private JavaMailSender mailSender;

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

    @RequestMapping("/userAjaxList")
    public @ResponseBody List<UserDTO> userAjaxList() {
        List<UserDTO> userList = userService.userList();
        return userList;
    }

    @RequestMapping("/idcheck")
    @ResponseBody
    public String userIdcheck(@RequestParam("uid") String uid){
        System.out.println("uid : " + uid);
        UserDTO dto = userService.idCheck(uid);

        if(dto != null || "".equals(uid.trim())){
            return "no";
        }
        return "yes";
    }

    @RequestMapping("/Pwcheck")
    @ResponseBody
    public String userPwcheck(@RequestParam("password") String password){
        UserDTO dto = userService.pwCheck(password);

        if(dto != null || "".equals(password.trim())){
            return "no";
        }
        return "yes";
    }

    @RequestMapping("/userEmailCheck")
    @ResponseBody
    public String emailCheck(@RequestParam("uEmail") String uEmail){
        System.out.println("uEmail = " + uEmail);

        // 인증코드 생성
        String uuid = UUID.randomUUID().toString().substring(0, 6);
        System.out.println("uuid = " + uuid);

        MimeMessage mail = mailSender.createMimeMessage();

        String mailContents = "<h3>이메일 주소 확인</h3></br>" +
                "<span>사용자가 본인임을 확인하려고 합니다. 다음 확인 코드를 입력하세요!!</span>"
                +"<h2>"+uuid+"</h2>";

        try {
            mail.setSubject("크몽 [이메일 인증]", "utf-8");
            mail.setText(mailContents, "utf-8", "html");

            // 상대방 메일 셋팅
            mail.addRecipient(Message.RecipientType.TO, new InternetAddress(uEmail));

            mailSender.send(mail);
            return uuid;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "fail";
    }










}
