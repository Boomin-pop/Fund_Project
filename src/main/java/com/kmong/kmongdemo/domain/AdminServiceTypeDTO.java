package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class AdminServiceTypeDTO {
    private int serviceTypeId;// primary key auto_increment
    private String serviceTypeName;// varchar(50) not null
    private int serviceTypeMandatory;// int 필수 여부
}