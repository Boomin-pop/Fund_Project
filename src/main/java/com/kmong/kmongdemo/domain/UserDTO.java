package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserDTO {
    private String userId;

    private String userPassword;

    private String userName;

    private String userNickname;

    private String userEmail;

    private String userTel;

    private int userJobId;

    private Timestamp userRegdate;


}
