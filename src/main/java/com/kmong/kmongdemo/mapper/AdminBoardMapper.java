package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminBoardMapper {
    List<BoardCategoryDTO> categoryList();
    int insertCategory(String name);
    int deleteSectionList(int cid);
    int deleteCategory(int cid);

    List<BoardSectionDTO> sectionList(int cid);
    int insertSection(BoardSectionDTO sdto);
    int deleteSection(int sid);

    int boardCount();
    List<BoardDTO> boardList(int startIndex, int pageSize, String query, String title, int cid);
}
