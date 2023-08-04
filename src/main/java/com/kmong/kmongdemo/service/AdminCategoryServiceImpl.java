package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.mapper.AdminCategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminCategoryServiceImpl implements AdminCategoryService {
    @Autowired
    private AdminCategoryMapper acmapper;

    @Override
    public List<JobDTO> jobList(){
        List<JobDTO> jlist = acmapper.jobList();
        return jlist;
    }
}
