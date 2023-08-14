package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.*;

import java.util.List;

public interface AdminLogService {
    int transactionCount();
    List<TransactionLogDTO> transactionList(int startIndex, int pageSize, String query, String id);

    int SignCount();
    List<SignLogDTO> SignList(int startIndex, int pageSize, String query, String id);
}
