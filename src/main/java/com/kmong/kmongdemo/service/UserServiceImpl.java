package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.mapper.JobMapper;
import com.kmong.kmongdemo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper umapper;

    @Autowired
    JobMapper jmapper;


    @Autowired
    JavaMailSender mailsender;

    @Override
    public List<UserDTO> userList() {
        System.out.println(umapper.userList());
        return umapper.userList();
    }


    @Override
    public int userRegister(UserDTO dto) {
        return umapper.userInsert(dto);
    }

    @Override
    public List<JobDTO> jobList() {
        System.out.println(jmapper.jobList());
        return jmapper.jobList();

    }

    @Override
    public UserDTO idCheck(String userId) {
        return umapper.idCheck(userId);
    }

    public UserDTO nicknameCheck(String userNickname){
        return umapper.nicknameCheck(userNickname);
    }

    @Override
    public boolean userLogin(UserDTO dto, HttpServletRequest req) {
        HttpSession session = req.getSession();

        // 아이디와 일치하는 회원정보를 DTO에 담아서 가져옴
        UserDTO loginDTO= umapper.userLogin(dto);
        System.out.println("loginDTO = " + loginDTO);

        if(loginDTO != null){ // 일치하는 아이디가 있는 경우
            String inputPw= dto.getUserPassword(); // 사용자가 입력한 비번
            String dbPw = loginDTO.getUserPassword(); // DB 비번

            if(inputPw.equals(dbPw)){ // 비번 일치
                session.setAttribute("loginDto", loginDTO);
                return true;
            }else{ // 비번 불일치
                return false;
            }
        }
        return false;
    }

    @Override
    public UserDTO userInfo(UserDTO dto) {
        return umapper.userInfo(dto);
    }

    @Override
    public int userModify(UserDTO dto) {
        return umapper.userUpdate(dto);
    }

    @Override
    public String findId(UserDTO dto) {
        String resultId= umapper.findId(dto);

        return resultId;
    }

    @Override
    public int findPw(String uid, String uEmail) {
        // 임시비밀번호
        String tempPw = UUID.randomUUID().toString().substring(0,6);
        MimeMessage mail = mailsender.createMimeMessage();

        String mailContents = "<h3>임시 비밀번호 발급</h3></br>"
                +"<h2>"+tempPw+"</h2>"
                +"<p>로그인 후 마이페이지에서 비밀번호를 변경해주면 됩니다.</p>";

        try {
            mail.setSubject("크몽 [임시 비밀번호]", "utf-8");
            mail.setText(mailContents, "utf-8", "html");

            // 상대방 메일 셋팅
            mail.addRecipient(Message.RecipientType.TO, new InternetAddress(uEmail));

            mailsender.send(mail);

        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("tempPw = " + tempPw);
        int n = umapper.findPw(uid, uEmail, tempPw);

        return n;
    }

    @Override
    public int modifyPw(UserDTO dto) {
        int n = umapper.updatePw(dto);
        return n;
    }

}
