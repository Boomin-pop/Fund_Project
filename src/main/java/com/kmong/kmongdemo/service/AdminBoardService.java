package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.*;

import java.util.List;

public interface AdminBoardService {
    List<BoardCategoryDTO> categoryList();
    int insertCategory(String name);
    int deleteCategory(int cid);

    List<BoardSectionDTO> sectionList(int cid);
    int insertSection(BoardSectionDTO sdto);
    int deleteSection(int sid);

    int boardCount();
    List<BoardDTO> boardList(int startIndex, int pageSize, String query, String title, int cid);
}
