package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.mapper.JobMapper;
import com.kmong.kmongdemo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

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
}