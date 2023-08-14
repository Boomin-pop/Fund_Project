package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.UploadFile;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Component
public class FileStore {
    private final String rootPath = System.getProperty("user.dir");
    private final String fileDir = rootPath + "\\src\\main\\resources\\static\\imgs\\";

    public String getFullPath(String filename) {
        return fileDir + filename;
    }
    public String storeFile(MultipartFile multipartFile) throws IOException{
        if(multipartFile == null || multipartFile.isEmpty())
            return null;

        String originalFileName = multipartFile.getOriginalFilename();
        //작성자가 업로드한 피일명
        String storeFileName = UUID.randomUUID() + "." + extractExt(originalFileName);

        File file = new File(getFullPath(storeFileName));

        multipartFile.transferTo(file);

        return storeFileName;
    }

    private String extractExt(String originalFileName){
        int pos = originalFileName.lastIndexOf(".");
        return originalFileName.substring(pos + 1);
    }
}
