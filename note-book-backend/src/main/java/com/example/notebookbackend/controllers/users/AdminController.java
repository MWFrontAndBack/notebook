package com.example.notebookbackend.controllers.users;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/public/admin")
public class AdminController {

    @GetMapping
    public String adminEndpoint() {
        return "Admin endpoint";
    }
}