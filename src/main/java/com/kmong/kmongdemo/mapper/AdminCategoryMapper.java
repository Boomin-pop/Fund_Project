package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.JobDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminCategoryMapper {
    List<JobDTO> jobList();
}
