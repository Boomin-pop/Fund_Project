package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;
import com.kmong.kmongdemo.mapper.AdminCategoryMapper;
import com.kmong.kmongdemo.mapper.AdminLogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminLogServiceImpl implements AdminLogService {
    @Autowired
    private AdminLogMapper almapper;

    @Override
    public int transactionCount() {
        return almapper.transactionCount();
    }
    @Override
    public List<TransactionLogDTO> transactionList(int startIndex, int pageSize, String query, String id) {
        return almapper.transactionList(startIndex, pageSize, query, id);
    }
}
