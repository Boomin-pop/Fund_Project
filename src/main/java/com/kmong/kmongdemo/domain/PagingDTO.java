package com.kmong.kmongdemo.domain;

import lombok.Data;

@Data
public class PagingDTO {//페이징 처리를 위한 DTO, 최대한 어떤 데이터든 사용할 수 있도록 작성
    private int dataPerPage;// 한 페이지당 데이터 수
    private int pagePerBlock;// 한 블럭당 페이지 수  {(ex) < 1 2 3 4 5 > pagePerBlock = 5}

    //controller 데이터 가져오기
    private int dataTotalNum;// 가져온 데이터의 총 개수
    private int pageTotalNum; // 만들어진 페이지의 총 개수
    private int blockTotalNum; // 만들어진 블럭의 총 개수

    private int currentPage; //현재 페이지
    private int currentBlock; // 현재 블럭
    private int startPage; // 현재 블럭의 시작 페이지
    private int endPage; // 현재 블럭의 마지막 페이지

    private int prevPage; // 이전 블럭의 마지막 페이지
    private int nextPage; // 다음 블럭의 시작 페이지

    private int index;

    public PagingDTO(int totalCnt, int cPage, int pageSize, int blockSize){//총 데이터 개수와 현재 페이지의 정보 받아오기(controller에서)
        setDataPerPage(pageSize); // 페이지당 데이터 개수 설정
        setPagePerBlock(blockSize); // 블럭당 페이지 개수 설정
        setCurrentPage(cPage);// 현재 페이지
        setDataTotalNum(totalCnt);// 총 데이터 개수
//-----------------------controller에서 설정---------------------------------//

        setPageTotalNum((int) Math.ceil(dataTotalNum * 1.0 / dataPerPage)); // 총 페이지 개수 계산
        setBlockTotalNum((int) Math.ceil(pageTotalNum * 1.0 / pagePerBlock)); // 총 블럭 개수 계산

        setCurrentBlock((int) Math.ceil((currentPage * 1.0)/pagePerBlock)); // 현재 블럭 계산
        setStartPage((currentBlock - 1) * pagePerBlock + 1); // 현재 블럭의 시작 페이지
        setEndPage(startPage + pagePerBlock - 1); // 현재 블럭의 마지막 페이지
        if(endPage > pageTotalNum){ // 현재 블럭이 마지막 블럭일 때 계산된 마지막 페이지가 존재하는 페이지보다 클 경우
            this.endPage = pageTotalNum;// 총 페이지 개수를 마지막 페이지로
        }

        setPrevPage(currentBlock * pagePerBlock - pagePerBlock); // 이전 블럭의 마지막 페이지
        setNextPage(currentBlock * pagePerBlock + 1); // 다음 블럭의 첫 페이지

        setIndex((currentPage-1) * dataPerPage);
    }

    /*
    Controller에서 사용법
    (Model model, @ReqeustParam(defaultValue = "1") int currentPage)// 매개변수
    int totalCnt = service.ListCount(); // 리스트 개수 구해서 선언(SELECT COUNT(*) FROM table;)
    PagingDTO pageingDTO = new PagingDTO(totalCnt, currentPage, 페이지 당 데이터 개수, 블럭 당 페이지 개수);// 페이징 선언

    int startIndex = pagingDTO.getIndex();
    int pageSize = pageingDTO.getDataPerPage();// 리스트 가져올 때 이용할 변수들

    List<> list = service.getList(startIndex, pageSize);// 리스트 가져오기 (SELECT * FROM table LIMIT startIndex, pageSize;)

    model.add...(list);
    model.add...(pagingDTO);

    return "";
     */
}

