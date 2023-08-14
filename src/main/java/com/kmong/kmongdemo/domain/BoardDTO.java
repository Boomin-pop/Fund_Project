package com.kmong.kmongdemo.domain;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;

@Data
public class BoardDTO {
    private int boardId;
    private int boardSectionId;
    private String boardSectionName;
    private int boardCategoryId;
    private String boardCategoryName;
    private String boardWriter;
    private Timestamp boardUploadTime;
    private String boardTitle;
    private String boardContent;
    private String boardImg1;
    private String boardImg2;
    private String boardImg3;
    private MultipartFile imgFile1;
    private MultipartFile imgFile2;
    private MultipartFile imgFile3;
}
