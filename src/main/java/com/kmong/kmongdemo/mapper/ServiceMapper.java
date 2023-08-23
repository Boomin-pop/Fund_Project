package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.ServiceCategoryDTO;
import com.kmong.kmongdemo.domain.ServiceDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ServiceMapper {
    List<ServiceCategoryDTO> topCatList();

    List<ServiceTypeDTO> serviceTypeList();
    //Map<String, String> serviceTypeList();

    ServiceTypeChkDTO serviceTypeChkList(String code);

    void serviceInput(Map map);

    void serviceTempSave(Map map);

    void dbCleaner();

    List<ServiceDTO> serviceInfo(int serviceID);

    List<ServiceDTO> serviceList();
}
