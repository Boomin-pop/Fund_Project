package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import com.kmong.kmongdemo.mapper.ProjectRequestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ProjectRequestServiceImpl implements ProjectRequestService {

    @Autowired
    ProjectRequestMapper prMapper;

    @Override
    public ArrayList<ProjectRequestDTO> projectList(String id) {
        return prMapper.projectList(id);
    }

    @Override
    public void uploadProject(String category, String title, String work, String requested, String budget, String wanted, String close, String term, String id) {
        prMapper.uploadProject(category, title, work, requested, budget, wanted, close, term, id);
    }

    @Override
    public void delete(int no) {
        prMapper.delete(no);
    }
}
