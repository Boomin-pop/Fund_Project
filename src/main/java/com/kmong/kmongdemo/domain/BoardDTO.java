package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class BoardDTO {
    private int boardId;
    private int boardSectionId;
    private String boardSectionName;
    private String boardCategoryName;
    private String boardWriter;
    private Timestamp boardUploadTime;
    private String boardTitle;
    private String boardContent;
    private UploadFile boardImg1;
    private UploadFile boardImg2;
    private UploadFile boardImg3;


}
