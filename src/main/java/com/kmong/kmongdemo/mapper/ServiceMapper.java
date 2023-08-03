package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.CategoryDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ServiceMapper {
    List<CategoryDTO> topCatList();

    Map<Object, Object> serviceTypeList();
}
