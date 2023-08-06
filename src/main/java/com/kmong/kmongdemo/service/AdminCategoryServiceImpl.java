package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
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
    @Override
    public int insertJob(String jname) {
        return acmapper.insertJob(jname);
    }
    @Override
    public int removeJob(int jid) {
        return acmapper.removeJob(jid);
    }

    @Override
    public List<AdminServiceTypeDTO> typeList() {
        List<AdminServiceTypeDTO> tlist = acmapper.typeList();
        System.out.println("servicetlist = " + tlist);
        return tlist;
    }

    @Override
    public List<AdminCategoryDTO> categoryList() {
        List<AdminCategoryDTO> clist = acmapper.categoryList();
        return clist;
    }
}
