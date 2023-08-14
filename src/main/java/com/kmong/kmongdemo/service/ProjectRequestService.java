package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;

import java.util.ArrayList;

public interface ProjectRequestService {
    ArrayList<ProjectRequestDTO> projectList(String id);

    void uploadProject(String category, String title, String work, String requested, String budget, String wanted, String close, String term, String id);

    void delete(int no);
}
