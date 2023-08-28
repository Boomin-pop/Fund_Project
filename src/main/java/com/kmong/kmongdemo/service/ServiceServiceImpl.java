package com.kmong.kmongdemo.service;

import com.kmong.kmongdemo.domain.*;
import com.kmong.kmongdemo.mapper.ServiceMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.*;

@Service
public class ServiceServiceImpl implements ServiceService{

    @Autowired
    private ServiceMapper serviceMapper;

    @Override
    public List<ServiceCategoryDTO> topCatList() {
       // System.out.println(serviceMapper.topCatList());
        return serviceMapper.topCatList();
    }

    @Override
    public List<ServiceDTO> serviceList(){
        return serviceMapper.serviceList();
    }

    @Override
    public int serviceTextInput(Map txtMap) {
        String svcAreaSplID = (String) txtMap.get("splID");
        System.out.println("svcAreaSplID = " + svcAreaSplID);
        int i = serviceMapper.serviceTextInput(txtMap);
        return i;
    }

    @Override
    public void serviceImgInput(Map imgMap) {
        serviceMapper.serviceImgInput(imgMap);
    }

    @Override
    public ServiceTypeChkDTO serviceTypeChkList(String code) {return serviceMapper.serviceTypeChkList(code);
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
//    public void serviceInput(MultipartHttpServletRequest mhr) {
//        String pathInfo = String.valueOf(mhr.getPathInfo());
//        String ContextPath = String.valueOf(mhr.getContextPath());
//        String rootPath = String.valueOf(mhr.getContextPath());
//        System.out.println("pathInfo = " + pathInfo);
//        System.out.println("ContextPath = " + ContextPath);
//        System.out.println("rootPath = " + rootPath);
//        String ssr = String.valueOf(mhr.getServletContext());
//        System.out.println("getServletContext = " + ssr);
//
//        String savePath = "/static/imgs";
//        String realPath = mhr.getServletContext().getRealPath(savePath);
//        System.out.println(realPath);
//        int maxSize = 1024*1024*500; // 1kb * 1kb = 1MB*10 = 10MB
//        Map map = new HashMap();
//        Enumeration<String> enu = mhr.getParameterNames();
//        while(enu.hasMoreElements()) {
//            String paramName = enu.nextElement();
//            String paramValue = mhr.getParameter(paramName);
//
//            System.out.println(paramName +":"+paramValue);
//            map.put(paramName, paramValue);
//        }
//
//        // 파일
//        Iterator<String> iter= mhr.getFileNames();
//        //List<String> fileList = new ArrayList<String>();
//
//        while(iter.hasNext()) {
//            String fileParamName = iter.next();
//            System.out.println("fileParamName : " + fileParamName);
//
//            // MultipartFile : 파일정보를 갖고 있는 객체
//            MultipartFile mFile= mhr.getFile(fileParamName);
//
//            String originName = mFile.getOriginalFilename();
//            System.out.println("originName : " + originName);
//
//            File file = new File(realPath +"\\"+ fileParamName);
//            System.out.println("file = " + file);
//            if(mFile.getSize() !=0) { // 업로드된 경우
//                if(!file.exists()) { // 파일이 존재하지 않으면 최초로 한번만 실행
//                    if(file.getParentFile().mkdir()) { // savePath에 지정된 폴더(fileRepo) 생성
//                        try {
//                            file.createNewFile();
//                        } catch (IOException e) {
//                            // TODO Auto-generated catch block
//                            e.printStackTrace();
//                        } // 임시파일 생성
//                    }//if
//                }//if
//
//                File uploadFile = new File(realPath +"\\"+originName);
//
//                // 중복시 파일명 대체
//                if(uploadFile.exists()) {
//                    originName = System.currentTimeMillis()+"_"+originName;
//                    uploadFile = new File(realPath +"\\"+originName);
//                }	// if
//                // 실제 파일 업로드하기
//                try {
//                    mFile.transferTo(uploadFile);
//                } catch (IllegalStateException e) {
//                    // TODO Auto-generated catch block
//                    e.printStackTrace();
//                } catch (IOException e) {
//                    // TODO Auto-generated catch block
//                    e.printStackTrace();
//                }
//                //fileList.add(originName);
//            }
//            map.put(fileParamName, originName);
//
//            serviceMapper.serviceInput(map);
//           // serviceMapper.dbCleaner();
//        }
//    }

    @Override
    public void serviceTempSave(MultipartHttpServletRequest mhr) {
        String savePath = "/temporary/imgs";
        String realPath = mhr.getServletContext().getRealPath(savePath);
        int maxSize = 1024*1024*10; // 1kb * 1kb = 1MB*10 = 10MB
        Map map = new HashMap();
        Enumeration<String> enu = mhr.getParameterNames();
        while(enu.hasMoreElements()) {
            String paramName = enu.nextElement();
            String paramValue = mhr.getParameter(paramName);

            System.out.println(paramName +":"+paramValue);
            map.put(paramName, paramValue);
        }

        // 파일
        Iterator<String> iter= mhr.getFileNames();
        //List<String> fileList = new ArrayList<String>();

        while(iter.hasNext()) {
            String fileParamName = iter.next();
            System.out.println("fileParamName : " + fileParamName);

            // MultipartFile : 파일정보를 갖고 있는 객체
            MultipartFile mFile= mhr.getFile(fileParamName);

            String originName = mFile.getOriginalFilename();
            System.out.println("originName : " + originName);

            File file = new File(realPath +"\\"+ fileParamName);
            System.out.println("file = " + file);
            if(mFile.getSize() !=0) { // 업로드된 경우
                if(!file.exists()) { // 파일이 존재하지 않으면 최초로 한번만 실행
                    if(file.getParentFile().mkdir()) { // savePath에 지정된 폴더(fileRepo) 생성
                        try {
                            file.createNewFile();
                        } catch (IOException e) {
                            // TODO Auto-generated catch block
                            e.printStackTrace();
                        } // 임시파일 생성
                    }//if
                }//if

                File uploadFile = new File(realPath +"\\"+originName);

                // 중복시 파일명 대체
                if(uploadFile.exists()) {
                    originName = System.currentTimeMillis()+"_"+originName;
                    uploadFile = new File(realPath +"\\"+originName);
                }	// if
                // 실제 파일 업로드하기
                try {
                    mFile.transferTo(uploadFile);
                } catch (IllegalStateException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                } catch (IOException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                //fileList.add(originName);
            }
            map.put(fileParamName, originName);

            serviceMapper.serviceTempSave(map);
        }
    }

    @Override
    public List<ServiceDTO> serviceInfo(int serviceID) {
        return serviceMapper.serviceInfo(serviceID);
    }

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




