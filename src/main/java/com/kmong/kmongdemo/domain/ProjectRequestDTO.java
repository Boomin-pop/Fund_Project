package com.kmong.kmongdemo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectRequestDTO {
    private int projectRequestNo;
    private String projectRequestCategory;
    private String projectRequestTitle;
    private String projectRequestWork;
    private String projectRequestRequest;
    private String projectRequestBudget;
    private String projectRequestWanted;
    private String projectRequestClose;
    private String projectRequestTerm;
    private Timestamp projectRequestUpload;
    private int projectRequestApprove;

//    삭제 사유 추가
    private String projectRequestDelete;
    private String userId;
}
