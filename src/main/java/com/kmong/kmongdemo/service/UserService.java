package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface UserService {
    List<UserDTO> userList();

    int userRegister(UserDTO dto);

    List<JobDTO> jobList();

    UserDTO idCheck(String userId);

    UserDTO nicknameCheck(String userNickname);

    boolean userLogin(UserDTO dto, HttpServletRequest req);

    UserDTO userInfo(UserDTO dto);

    int userModify(UserDTO dto);

    String findId(UserDTO dto);

    int findPw(String uid, String uEmail);

    int modifyPw(UserDTO dto);



}
