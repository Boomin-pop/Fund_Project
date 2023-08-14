package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminLogMapper {
    int transactionCount();
    List<TransactionLogDTO> transactionList(int startIndex, int pageSize, String query, String id);

    int signCount();
    List<SignLogDTO> signList(int startIndex, int pageSize, String query, String id);
}
