package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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

    return "/user/userJoinMethod";
}

    @GetMapping("/joinChoice")
    public String userJoin2(){

        return "/user/userJoinChoice";
    }

    @GetMapping("/userRegister")
    public String joinClient(Model model){
        List<JobDTO> jobList = userService.jobList();
        model.addAttribute("jobList", jobList);

        return "user/userJoin";
    }


    @PostMapping("/userInsert")
    public String userInsert(UserDTO dto){
        userService.userRegister(dto);
        System.out.println("dto = " + dto);


        return "redirect:/";
    }


    @RequestMapping("/userAjaxList")
    public @ResponseBody List<UserDTO> userAjaxList() {
        List<UserDTO> userList = userService.userList();
        return userList;
    }

    @RequestMapping("/idCheck")
    @ResponseBody
    public String userIdcheck(@RequestParam("userId") String userId){
        System.out.println("userId : " + userId);
        UserDTO dto = userService.idCheck(userId);

        if(dto != null || "".equals(userId.trim())){
            return "no";
        }
        return "yes";
    }

    @RequestMapping("/nicknameCheck")
    @ResponseBody
    public String userNicknameCheck(@RequestParam("userNickname") String userNickname){
        System.out.println("userNickname : " + userNickname);
        UserDTO dto = userService.nicknameCheck(userNickname);

        if(dto != null || "".equals(userNickname.trim())){
            return "no";
        }
        return "yes";
    }


    @RequestMapping("/userEmailCheck")
    @ResponseBody
    public String emailCheck(@RequestParam("userEmail") String userEmail){
        System.out.println("userEmail = " + userEmail);

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
            mail.addRecipient(Message.RecipientType.TO, new InternetAddress(userEmail));

            mailSender.send(mail);
            return uuid;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return "fail";
    }

    @GetMapping("/userLogin")
    public String loginForm(){
        return "/user/userLogin";
    }

    @PostMapping("/login")
    public String userLogin(UserDTO dto, HttpServletRequest req
            , RedirectAttributes rttr){
        boolean result = userService.userLogin(dto, req);

        if(!result){ // 로그인 실패
            rttr.addAttribute("result", 0);
            return "redirect:/user/userLogin"; // redirect는 GET 방식
        }
        return "redirect:/";
    }

    @GetMapping("/logout.do")
    public String userLogout(HttpSession session){
        session.invalidate();// 세션 초기화
        return "redirect:/";
    }

    @GetMapping("/idpwFind")
    public String idpwFind(String find, Model m){
        m.addAttribute("find", find);
        return "/user/idpwFind";
    }

    @PostMapping("/findId")
    @ResponseBody
    public String findId(UserDTO dto){
        System.out.println("dto.getName() = " + dto.getUserName());
        System.out.println("dto.getTel() = " + dto.getUserTel());

        String resultId= userService.findId(dto);
        System.out.println("resultId = " + resultId);

        return resultId;
    }

    @PostMapping("/findPw")
    @ResponseBody
    public int findPw(String uid, String uEmail){
        int n = userService.findPw(uid, uEmail);
        System.out.println("n = " + n);
        return n;
    }



}
