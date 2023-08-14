package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.UserDTO;

import java.util.List;

public interface AdminUserService {
    List<UserDTO> userLists();

    List<UserDTO> userDeleteLists();

    UserDTO userInfo(String userId);

    int userModify(UserDTO userDTO);

    int userDeleteR(UserDTO userDTO);

    int deleteUser(UserDTO userDTO);

    int userCancle(UserDTO userDTO);
}
