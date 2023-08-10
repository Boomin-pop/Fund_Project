package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.UserDTO;
import com.kmong.kmongdemo.mapper.AdminUserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminUserServiceImpl implements AdminUserService{
    @Autowired
    AdminUserMapper adminUserMapper;

    @Override
    public List<UserDTO> userLists() {
        return adminUserMapper.userLists();
    }

    @Override
    public UserDTO userInfo(String userId) {
        return adminUserMapper.userInfo(userId);
    }

    @Override
    public int userModify(UserDTO userDTO) {
        return adminUserMapper.userModify(userDTO);
    }



}
