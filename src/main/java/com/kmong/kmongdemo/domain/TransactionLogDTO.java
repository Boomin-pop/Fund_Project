package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class TransactionLogDTO {//거래 기록 dto
    private int transactionId;
    private String transactionBuyerId;// user id길이에 맞게 varchar길이 변경할 것
    private String transactionSellerId;
    private int transactionServiceId;
    private int transactionPrice;
    private Timestamp transactionTransTime;
    private String transactionKind;//승인, 취소 2가지
}
