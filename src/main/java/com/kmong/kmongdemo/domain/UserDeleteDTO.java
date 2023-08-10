package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class UserDeleteDTO {
    private int userDeleteNo;
    private String userId;
    private String userPassword;
    private String userName;
    private String userNickname;
    private String userEmail;
    private int userJobId;
    private Timestamp userRegdate;
    private String userDelete;
}
