package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.ServiceCategoryDTO;
import com.kmong.kmongdemo.domain.ServiceDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.util.List;


public interface ServiceService {
    List<ServiceCategoryDTO> topCatList();

    ServiceTypeChkDTO serviceTypeChkList(String code);


      List<ServiceTypeDTO> serviceTypeList();

      void serviceInput(MultipartHttpServletRequest mhr);

    void serviceTempSave(MultipartHttpServletRequest mhr);

    List<ServiceDTO> serviceInfo(int serviceID);

    List<ServiceDTO> serviceList();
}
