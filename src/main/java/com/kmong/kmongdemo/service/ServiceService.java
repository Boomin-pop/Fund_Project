package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ServiceService {
    List<CategoryDTO> topCatList();
}
