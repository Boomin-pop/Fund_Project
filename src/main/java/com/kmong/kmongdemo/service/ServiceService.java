package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;


public interface ServiceService {
    List<ServiceCategoryDTO> topCatList();

    ServiceTypeChkDTO serviceTypeChkList(String code);


      List<ServiceTypeDTO> serviceTypeList();

//      void serviceInput(MultipartHttpServletRequest mhr);

    void serviceTempSave(MultipartHttpServletRequest mhr);

    List<ServiceDTO> serviceInfo(int serviceID);

    List<ServiceDTO> serviceList();

    int serviceTextInput(Map txtMap);

    void serviceImgInput(Map imgMap);

}
