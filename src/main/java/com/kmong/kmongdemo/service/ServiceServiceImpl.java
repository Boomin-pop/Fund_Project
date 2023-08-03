package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.mapper.ServiceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceServiceImpl implements ServiceService{

    @Autowired
    private ServiceMapper serviceMapper;
    @Override
    public List<CategoryDTO> topCatList() {
        System.out.println(serviceMapper.topCatList());
        return serviceMapper.topCatList();
    }
}
