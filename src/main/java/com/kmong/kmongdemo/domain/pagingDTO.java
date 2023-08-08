package com.kmong.kmongdemo.domain;

import lombok.Data;

import java.util.List;

@Data
public class pagingDTO {//페이징 처리를 위한 DTO, 최대한 어떤 데이터든 사용할 수 있도록 작성
    private int dataNumPerBlock;// 한 블럭당 데이터 수
    private int blockShowNum;// 보여질 블럭 수  {(ex) < 1 2 3 4 5 > blockShowNum = 5}

    //controller 데이터 가져오기
    private int dataTotalNum;// 가져온 데이터의 총 개수
    private int blockTotalNum; // 만들어진 블럭의 총 개수


    public pagingDTO(int dataset, int blockset){
        this.dataNumPerBlock = dataset;
        this.blockShowNum = blockset;
    }
    public void calData(int totaldata){
        this.dataTotalNum = totaldata;
        this.blockTotalNum = dataTotalNum/dataNumPerBlock;
    }
}

