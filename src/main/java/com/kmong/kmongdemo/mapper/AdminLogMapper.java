package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.domain.TransactionLogDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminLogMapper {
    int transactionCount();
    List<TransactionLogDTO> transactionList(int startIndex, int pageSize, String query, String id);

}
