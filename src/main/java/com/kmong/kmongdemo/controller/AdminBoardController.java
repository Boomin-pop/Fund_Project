package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.*;
import com.kmong.kmongdemo.service.AdminBoardService;
import com.kmong.kmongdemo.service.AdminLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.imageio.IIOException;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/admin")
public class AdminBoardController {
    @Autowired
    private AdminBoardService abservice;
    @Autowired
    FileStore fileStore = new FileStore();

    // 카테고리 페이지로 이동 - 직업 카테고리, 비즈니스 카테고리, 분야 카테고리 리스트 전달
    @GetMapping("/board")
    public String adminBoard(Model model, @RequestParam(defaultValue = "1") int page
                                        , @RequestParam(defaultValue = "boardUploadTime") String by
                                        , @RequestParam(defaultValue = "desc") String ud
                                        , @RequestParam(defaultValue = "") String title
                                        , @RequestParam(defaultValue = "0") int cid) {
        List<BoardCategoryDTO> bclist = abservice.categoryList();

        String query = "ORDER BY " + by + " " + ud;
        int totalBoardCnt = abservice.boardCount();
        PagingDTO paging = new PagingDTO(totalBoardCnt, page, 20, 5);

        int startIndex = paging.getIndex();
        int pageSize = paging.getDataPerPage();

        List<BoardDTO> blist = abservice.boardList(startIndex, pageSize, query, title, cid);

        model.addAttribute("bclist", bclist);
        model.addAttribute("boardList", blist);
        model.addAttribute("boardPage", paging);
        model.addAttribute("by", by);
        model.addAttribute("ud",ud);
        model.addAttribute("title", title);
        model.addAttribute("cid", cid);
        return "admin/adminBoard";
    }
//    게시판 카테고리 관리
    @GetMapping("/board/category/list")
    public @ResponseBody List<BoardCategoryDTO> categoryList(){
        List<BoardCategoryDTO> bclist = abservice.categoryList();
        return bclist;
    }
    @PostMapping("/board/category/insert")
    public @ResponseBody int insertCategory(@RequestBody String name){
        int n = abservice.insertCategory(name);
        return n;
    }
    @DeleteMapping("/board/category/{cid}")
    public @ResponseBody int deleteCategory(@PathVariable("cid") int cid){
        int n = abservice.deleteCategory(cid);
        return n;
    }

//    게시판 섹션 관리
    @PostMapping("/board/section/list")
    public @ResponseBody List<BoardSectionDTO> sectionList(@RequestBody int cid){
        List<BoardSectionDTO> bslist = abservice.sectionList(cid);
        return bslist;
    }
    @PostMapping("/board/section/insert")
    public @ResponseBody int insertSection(@RequestBody BoardSectionDTO sdto){
        int n = abservice.insertSection(sdto);
        return n;
    }
    @DeleteMapping("/board/section/{sid}")
    public @ResponseBody int deleteSection(@PathVariable("sid") int sid){
        int n = abservice.deleteSection(sid);
        return n;
    }

    @GetMapping("/board/register")
    public String registBoard(Model model){
        List<BoardCategoryDTO> bclist = abservice.categoryList();
        model.addAttribute("bclist", bclist);

        return "admin/adminBoardRegister";
    }
    @PostMapping("/board/insert")
    public String insertBoard(BoardDTO bdto) throws IOException {
        String imgFile1 = fileStore.storeFile(bdto.getImgFile1());
        String imgFile2 = fileStore.storeFile(bdto.getImgFile2());
        String imgFile3 = fileStore.storeFile(bdto.getImgFile3());

        bdto.setBoardImg1(imgFile1);
        bdto.setBoardImg2(imgFile2);
        bdto.setBoardImg3(imgFile3);

        int n = abservice.insertBoard(bdto);

        return "redirect:/admin/board";
    }
    @GetMapping("/board/view")
    public String viewBoard(Model model, @RequestParam("bid") int bid){
        List<BoardCategoryDTO> bclist = abservice.categoryList();
        BoardDTO board = abservice.getBoard(bid);

        model.addAttribute("bclist", bclist);
        model.addAttribute("board", board);
        return "/admin/adminBoardView";
    }
    @GetMapping("/board/delete")
    public String deleteBoard(@RequestParam("bid") int bid){
        int n = abservice.delBoard(bid);
        return "redirect:/admin/board";
    }
}
