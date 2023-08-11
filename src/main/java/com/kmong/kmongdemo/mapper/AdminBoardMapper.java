package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.BoardCategoryDTO;
import com.kmong.kmongdemo.domain.BoardSectionDTO;
import com.kmong.kmongdemo.domain.SignLogDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminBoardMapper {
    List<BoardCategoryDTO> categoryList();

    List<BoardSectionDTO> sectionList(int cid);
}
