package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.UserDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminUserMapper {

    List<UserDTO> userLists();

    List<UserDTO> userDeleteLists();

    UserDTO userInfo(String userId);

    int userModify(UserDTO userDTO);

    int userDeleteR(UserDTO userDTO);

    int deleteUser(UserDTO userDTO);

    int userCancle(UserDTO userDTO);
}
