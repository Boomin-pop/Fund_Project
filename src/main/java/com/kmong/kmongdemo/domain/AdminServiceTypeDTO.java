package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class AdminServiceTypeDTO {
    private int serviceId;//serviceTypeId 로 바꿔야함 일단 구동을 위해 수정하지 않음
    private String serviceName;//위와 같음
}