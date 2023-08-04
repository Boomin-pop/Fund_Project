package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ServiceMapper {
    List<CategoryDTO> topCatList();

    List<ServiceTypeDTO> serviceTypeList();
    //Map<String, String> serviceTypeList();

    ServiceTypeChkDTO serviceTypeChkList(String code);
}
