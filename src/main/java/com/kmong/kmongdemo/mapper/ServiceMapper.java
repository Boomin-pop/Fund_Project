package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.CategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ServiceMapper {
    List<CategoryDTO> topCatList();
}
