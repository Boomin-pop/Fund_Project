package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminProjectRequestMapper {

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
