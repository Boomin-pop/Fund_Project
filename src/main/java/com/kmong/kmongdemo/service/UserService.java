package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> userList();

    int userRegister(UserDTO dto);

    List<JobDTO> jobList();

    UserDTO idCheck(String uid);
}
