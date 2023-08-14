package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.TopHeaderCategoryDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

public interface TopHeaderCategoryService {
    ArrayList<TopHeaderCategoryDTO> getCategoryList();
}
