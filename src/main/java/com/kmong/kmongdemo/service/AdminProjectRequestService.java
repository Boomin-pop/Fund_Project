package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;

import java.util.List;

public interface AdminProjectRequestService {
    List<ProjectRequestDTO> projectLists();

    List<ProjectRequestDTO> projectAdmissionLists();

    List<ProjectRequestDTO> projectDeleteLists();

    ProjectRequestDTO projectInfo(int projectRequestNo);

    int projectModify(ProjectRequestDTO projectRequestDTO);

    int projectDeleteR(ProjectRequestDTO projectRequestDTO);

    int deleteProject(ProjectRequestDTO projectRequestDTO);

    int projectCancle1(ProjectRequestDTO projectRequestDTO);

    int projectCancle2(ProjectRequestDTO projectRequestDTO);

    int projectApprove(ProjectRequestDTO projectRequestDTO);
}
