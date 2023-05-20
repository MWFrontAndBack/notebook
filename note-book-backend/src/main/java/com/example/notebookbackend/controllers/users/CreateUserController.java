package com.example.notebookbackend.controllers.users;

import com.example.notebookbackend.controllers.service.UserDataValidationImpl;
import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.entities.User;
import com.example.notebookbackend.repositories.NoteRepository;
import com.example.notebookbackend.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/")
@CrossOrigin
public class CreateUserController {


//    private UserDetailsService userDetailsService;


    private UserRepository userRepository;



private NoteRepository noteRepository;

    private PasswordEncoder passwordEncoder;

 private UserDataValidationImpl userDataValidation;

    public CreateUserController(UserRepository userRepository, NoteRepository noteRepository, PasswordEncoder passwordEncoder, UserDataValidationImpl userDataValidation) {
        this.userRepository = userRepository;
        this.noteRepository = noteRepository;
        this.passwordEncoder = passwordEncoder;
        this.userDataValidation = userDataValidation;
    }

    @PostMapping
    @RequestMapping("/create-user")
    public void saveUserTodb(@RequestBody User requestUser) {

        requestUser.setPassword(passwordEncoder.encode(requestUser.getPassword()));
        userRepository.save(requestUser);

    }


    @PostMapping
    @RequestMapping("/login")
    public ResponseEntity<LoginResponse> loginTodb(@RequestBody User requestUser) {
    return   userDataValidation.validUserDataAndReturnHisDataIfSucced(requestUser);
//
    }

    @RequestMapping("/user-page")
    public ResponseEntity<List<Note>> getUsersNotes(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        String email = (String) authentication.getPrincipal();
User user =userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(user.getNoteList());


    }

    @GetMapping
    public String saveUserTodb() {
        return "acess";
    }

}
