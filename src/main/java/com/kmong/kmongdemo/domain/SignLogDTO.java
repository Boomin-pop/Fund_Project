package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.sql.Date;
import java.sql.Timestamp;

@Data
public class SignLogDTO {//거래 기록 dto
    private int signId;
    private String signUserId;// user id길이에 맞게 varchar길이 변경할 것
    private Date signRegDate; // 가입일 user에서 사용하는 자료형으로 변경할 것
    private Timestamp signLogTime;
    private String signKind;//승인, 취소 2가지
}
