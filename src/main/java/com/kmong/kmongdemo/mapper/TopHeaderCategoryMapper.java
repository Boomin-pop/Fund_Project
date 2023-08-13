package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.TopHeaderCategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface TopHeaderCategoryMapper {
    ArrayList<TopHeaderCategoryDTO> getCategoryList();
}
