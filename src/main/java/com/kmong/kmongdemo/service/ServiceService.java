package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


public interface ServiceService {
    List<CategoryDTO> topCatList();

    Map<String, String> serviceTypeList();
}
