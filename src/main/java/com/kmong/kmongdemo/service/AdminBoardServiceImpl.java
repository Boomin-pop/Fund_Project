package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.BoardCategoryDTO;
import com.kmong.kmongdemo.domain.BoardSectionDTO;
import com.kmong.kmongdemo.domain.SignLogDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;
import com.kmong.kmongdemo.mapper.AdminBoardMapper;
import com.kmong.kmongdemo.mapper.AdminLogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminBoardServiceImpl implements AdminBoardService {
    @Autowired
    AdminBoardMapper abmapper;

    @Override
    public List<BoardCategoryDTO> categoryList() {
        return abmapper.categoryList();
    }

    @Override
    public List<BoardSectionDTO> sectionList(int cid) {
        return abmapper.sectionList(cid);
    }
}
