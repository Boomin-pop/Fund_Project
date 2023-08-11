package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class BoardDTO {
    private int boardId;
    private int boardSectionId;
    private String boardWriter;
    private String boardTitle;
    private String boardContent;
    private String boardImg1;
    private String boardImg2;
    private String boardImg3;
}
