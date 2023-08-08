package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;

import java.util.List;

public interface AdminLogService {
    List<TransactionLogDTO> transactionList();
}
