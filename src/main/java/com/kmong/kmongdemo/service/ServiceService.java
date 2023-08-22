package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;
import java.util.Map;


public interface ServiceService {
    List<CategoryDTO> topCatList();

    ServiceTypeChkDTO serviceTypeChkList(String code);


      List<ServiceTypeDTO> serviceTypeList();

      void serviceInput(MultipartHttpServletRequest mhr);

    void serviceTempSave(MultipartHttpServletRequest mhr);
}
