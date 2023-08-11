package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.BoardCategoryDTO;
import com.kmong.kmongdemo.domain.BoardSectionDTO;
import com.kmong.kmongdemo.domain.SignLogDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;

import java.util.List;

public interface AdminBoardService {
    List<BoardCategoryDTO> categoryList();

    List<BoardSectionDTO> sectionList(int cid);
}
