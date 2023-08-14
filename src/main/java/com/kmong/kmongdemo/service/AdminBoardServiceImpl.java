package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.*;
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
    public int insertCategory(String name) {
        return abmapper.insertCategory(name);
    }
    @Override
    public int deleteCategory(int cid) {
        abmapper.deleteSectionList(cid);
        int n = abmapper.deleteCategory(cid);
        return n;
    }

    @Override
    public List<BoardSectionDTO> sectionList(int cid) {
        return abmapper.sectionList(cid);
    }
    @Override
    public int insertSection(BoardSectionDTO sdto) {
        return abmapper.insertSection(sdto);
    }
    @Override
    public int deleteSection(int sid) {
        return abmapper.deleteSection(sid);
    }

    @Override
    public int boardCount() {
        return abmapper.boardCount();
    }
    @Override
    public List<BoardDTO> boardList(int startIndex, int pageSize, String query, String title, int cid) {
        return abmapper.boardList(startIndex, pageSize, query, title, cid);
    }
}
