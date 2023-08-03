package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public class UserMapper {
    List<UserDTO> userList;
}
