package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.JobDTO;
import com.kmong.kmongdemo.mapper.JobMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobServiceImpl implements JobService {
    @Autowired
    private JobMapper jMapper;

    @Override
    public JobDTO getJobInfo(int jobId) {
        return jMapper.jobInfo(jobId);
    }
}
