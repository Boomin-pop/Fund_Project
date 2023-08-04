package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.UserDTO;

import java.util.List;

public interface AdminUserService {
    List<UserDTO> userLists();

    UserDTO userInfo(String userId);
}
