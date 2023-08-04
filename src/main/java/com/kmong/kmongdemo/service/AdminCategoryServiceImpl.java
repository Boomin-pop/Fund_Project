package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobCategory;
import com.kmong.kmongdemo.mapper.AdminCateogryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminCategoryServiceImpl implements AdminCategoryService {
    @Autowired
    AdminCateogryMapper acmapper;

    public List<JobCategory> getJob(){
        List<JobCategory> jlist = acmapper.getJob();
        return jlist;
    }
}
