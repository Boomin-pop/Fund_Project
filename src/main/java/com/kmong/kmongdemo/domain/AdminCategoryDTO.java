package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class AdminCategoryDTO {
    private int categoryId;// primary key auto_increament
    private String categoryName;// varcahr(50) not null
    private int categoryUpperId;// not null, 대분류의 경우 자기 자신의 id로 구분
    private int serviceTypeId1;
    private int serviceTypeId2;
    private int serviceTypeId3;
    private int serviceTypeId4;
    private int serviceTypeId5;
    private int serviceTypeId6;
    private int serviceTypeId7;
    private int serviceTypeId8;
}
