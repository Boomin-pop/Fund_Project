package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.JobCategory;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface AdminCateogryMapper {
    @Select("SELECT * FROM job")
    List<JobCategory> getJob();
}
