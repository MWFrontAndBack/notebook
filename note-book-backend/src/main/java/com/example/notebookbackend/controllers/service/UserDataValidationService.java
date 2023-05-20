package com.example.notebookbackend.controllers.service;

import com.example.notebookbackend.controllers.users.LoginResponse;
import com.example.notebookbackend.entities.User;
import org.springframework.http.ResponseEntity;

public interface UserDataValidationService {

    ResponseEntity<LoginResponse> validUserDataAndReturnHisDataIfSucced(User requestUser);


}
