package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserDTO> userList();

    int userInsert(UserDTO dto);

    UserDTO idCheck(String uid);
}
