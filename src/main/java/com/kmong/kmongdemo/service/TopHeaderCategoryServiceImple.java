package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.TopHeaderCategoryDTO;
import com.kmong.kmongdemo.mapper.TopHeaderCategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class TopHeaderCategoryServiceImple implements TopHeaderCategoryService {
    @Autowired
    TopHeaderCategoryMapper mapper;

    @Override
    public ArrayList<TopHeaderCategoryDTO> getCategoryList() {
        return mapper.getCategoryList();
    }
}
