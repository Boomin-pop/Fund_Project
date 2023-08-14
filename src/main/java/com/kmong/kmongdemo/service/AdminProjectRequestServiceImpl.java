package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import com.kmong.kmongdemo.mapper.AdminProjectRequestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminProjectRequestServiceImpl implements AdminProjectRequestService{
    @Autowired
    AdminProjectRequestMapper adminProjectRequestMapper;

    @Override
    public List<ProjectRequestDTO> projectLists() {
        return adminProjectRequestMapper.projectLists();
    }

    @Override
    public List<ProjectRequestDTO> projectAdmissionLists() {
        return adminProjectRequestMapper.projectAdmissionLists();
    }

    @Override
    public List<ProjectRequestDTO> projectDeleteLists() {
        return adminProjectRequestMapper.projectDeleteLists();
    }

    @Override
    public ProjectRequestDTO projectInfo(int projectRequestNo) {
        return adminProjectRequestMapper.projectInfo(projectRequestNo);
    }

    @Override
    public int projectModify(ProjectRequestDTO projectRequestDTO) {
        return adminProjectRequestMapper.projectModify(projectRequestDTO);
    }

    @Override
    public int projectDeleteR(ProjectRequestDTO projectRequestDTO) {
        return adminProjectRequestMapper.projectDeleteR(projectRequestDTO);
    }

    @Override
    public int deleteProject(ProjectRequestDTO projectRequestDTO) {
        return adminProjectRequestMapper.deleteProject(projectRequestDTO);
    }

    @Override
    public int projectCancle(ProjectRequestDTO projectRequestDTO) {
        return adminProjectRequestMapper.projectCancle(projectRequestDTO);
    }
}
