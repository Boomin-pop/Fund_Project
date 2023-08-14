package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class BoardSectionDTO {
    private int boardSectionId;
    private int boardCategoryId;
    private String boardSectionName;
}
