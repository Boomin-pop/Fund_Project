package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminCategoryMapper {
    List<JobDTO> jobList();
    int insertJob(String jname);
    int removeJob(int jid);

    List<AdminServiceTypeDTO> typeList();
    int insertType(String tname);

    List<AdminCategoryDTO> categoryList();
    AdminCategoryDTO categoryView(int cid);

}
