package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;

import java.util.List;
import java.util.Map;


public interface ServiceService {
    List<CategoryDTO> topCatList();

   // Map<String, String> serviceTypeList();

    ServiceTypeChkDTO serviceTypeChkList(String code);

//    Map<String, Integer> serviceTypeMandList();


      List<ServiceTypeDTO> serviceTypeList();
}
