package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminUserMapper {

    List<UserDTO> userLists();

    UserDTO userInfo(String userId);

    int userModify(UserDTO userDTO);
}
