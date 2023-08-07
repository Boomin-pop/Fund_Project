package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.mapper.JobMapper;
import com.kmong.kmongdemo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

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
    public UserDTO idCheck(String uid) {
        return umapper.idCheck(uid);
    }

    public UserDTO nicknameCheck(String nickname){
        return umapper.nicknameCheck(nickname);
    }
}