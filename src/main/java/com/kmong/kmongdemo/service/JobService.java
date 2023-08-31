package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;

public interface JobService {
    JobDTO getJobInfo(int jobId);
}
