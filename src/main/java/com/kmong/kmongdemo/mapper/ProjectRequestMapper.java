package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface ProjectRequestMapper {
    ArrayList<ProjectRequestDTO> projectList(String id);

    void uploadProject(String category, String title, String work, String requested, String budget, String wanted, String close, String term, String id);
}
