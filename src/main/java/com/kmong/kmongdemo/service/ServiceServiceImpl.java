package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.CategoryDTO;
import com.kmong.kmongdemo.domain.ServiceTypeChkDTO;
import com.kmong.kmongdemo.domain.ServiceTypeDTO;
import com.kmong.kmongdemo.mapper.ServiceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ServiceServiceImpl implements ServiceService{

    @Autowired
    private ServiceMapper serviceMapper;
    @Override
    public List<CategoryDTO> topCatList() {
       // System.out.println(serviceMapper.topCatList());
        return serviceMapper.topCatList();
    }

    @Override
    public ServiceTypeChkDTO serviceTypeChkList(String code) {
        return serviceMapper.serviceTypeChkList(code);
    }

    @Override
    public List<ServiceTypeDTO> serviceTypeList() {
    //public Map<String, String> serviceTypeList() {

        List<ServiceTypeDTO> stl = serviceMapper.serviceTypeList();
//        Map<String, String> serviceTypeListMap = new HashMap<>();
//        for(int i=0; i<stl.size(); i++){
//          serviceTypeListMap.put(stl.get(i).getServiceTypeCode(), stl.get(i).getServiceTypeName());
//        }
        //return serviceTypeListMap;
        return stl;
    }

//    @Override
//    public Map<String, Integer> serviceTypeMandList(){
//        List<ServiceTypeDTO> stl = serviceMapper.serviceTypeList();
//        Map<String, Integer> TypeListMandatoryMap = new HashMap<>();
//        for(int i=0; i<stl.size(); i++){
//            TypeListMandatoryMap.put(stl.get(i).getServiceTypeCode(), stl.get(i).getMandatoryInput());
//        }
//            return TypeListMandatoryMap;
//    }



}
