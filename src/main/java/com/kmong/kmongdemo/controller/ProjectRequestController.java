package com.kmong.kmongdemo.controller;

import com.kmong.kmongdemo.domain.ProjectRequestDTO;
import com.kmong.kmongdemo.service.ProjectRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Controller
@RequestMapping("/project")
public class ProjectRequestController {
    @Autowired
    private ProjectRequestService prService;

    @GetMapping("/request")
    public String requestForm(HttpSession session, Model model) {
        ArrayList<ProjectRequestDTO> list = prService.projectList(session.getId());

        System.out.println("list = " + list);

        model.addAttribute("list", list);

        return "projectRequest/projectRequest";
    }

    @PostMapping("/request")
    public String request(String category, String title, String work, String requested, String budget, String wanted, String close, String term, HttpSession session) {
        prService.uploadProject(category, title, work, requested, budget, wanted, close, term, session.getId());

        return "redirect:/project/request";
    }

    @GetMapping("/deleteProject")
    public String deleteProject(int no) {
        System.out.println("no = " + no);
        prService.delete(no);

        return "redirect:/project/request";
    }
}
