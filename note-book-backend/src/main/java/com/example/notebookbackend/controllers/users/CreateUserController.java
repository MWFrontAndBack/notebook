package com.example.notebookbackend.controllers.users;

import com.example.notebookbackend.entities.Authority;
import com.example.notebookbackend.repositories.AuthoritiesRepository;
import com.example.notebookbackend.service.UserDataValidationImpl;
import com.example.notebookbackend.entities.User;
import com.example.notebookbackend.repositories.NoteRepository;
import com.example.notebookbackend.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/public/")
@CrossOrigin(origins = "*")
public class CreateUserController {


//    private UserDetailsService userDetailsService;
private AuthoritiesRepository authoritiesRepository;

    private UserRepository userRepository;


    private NoteRepository noteRepository;

    private PasswordEncoder passwordEncoder;

    private UserDataValidationImpl userDataValidation;

    public CreateUserController(AuthoritiesRepository authoritiesRepository, UserRepository userRepository, NoteRepository noteRepository, PasswordEncoder passwordEncoder, UserDataValidationImpl userDataValidation) {
        this.authoritiesRepository = authoritiesRepository;
        this.userRepository = userRepository;
        this.noteRepository = noteRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDataValidation = userDataValidation;
    }

    @PostMapping
    @RequestMapping("/create-user")
    public ResponseEntity<User> saveUserTodb(@RequestBody User requestUser) {
        if (userRepository.existsByEmail(requestUser.getEmail())) {
            return ResponseEntity.status(HttpStatus.ALREADY_REPORTED).build();
        }
        requestUser.setPhoto("https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
        requestUser.setPassword(passwordEncoder.encode(requestUser.getPassword()));
        userRepository.save(requestUser);

        Authority authority = new Authority();
        authority.setAuthority("ROLE_USER");
        authority.setUser(requestUser);
        authoritiesRepository.save(authority);
        return ResponseEntity.ok(requestUser);
    }


    @PostMapping
    @RequestMapping("/login")
    public ResponseEntity<LoginResponse> loginTodb(@RequestBody User requestUser) {
        return userDataValidation.validUserDataAndReturnHisDataIfSucced(requestUser);

    }



}
