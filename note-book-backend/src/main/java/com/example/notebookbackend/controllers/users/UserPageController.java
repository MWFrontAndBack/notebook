package com.example.notebookbackend.controllers.users;

import com.example.notebookbackend.dto.UserDto;
import com.example.notebookbackend.dto.mapper.mapperUtil.MapperUtil;
import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.entities.User;
import com.example.notebookbackend.repositories.NoteRepository;
import com.example.notebookbackend.repositories.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/user-page")
@CrossOrigin(origins = "*")
public class UserPageController {
    private static final Logger logger = LoggerFactory.getLogger(UserPageController.class);

    private UserRepository userRepository;
    private NoteRepository noteRepository;

    public UserPageController(UserRepository userRepository, NoteRepository noteRepository) {
        this.userRepository = userRepository;
        this.noteRepository = noteRepository;
    }
@CrossOrigin
    @RequestMapping()
    public ResponseEntity<List<Note>> getUsersNotes() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) authentication.getPrincipal();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return ResponseEntity.ok().body(user.getNoteList());
    }

    @RequestMapping("/account")
    public ResponseEntity<UserDto> getAccoutInfo() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) authentication.getPrincipal();
        User user = userRepository.findByEmail(email);
        UserDto mapperUser = MapperUtil.map(user, UserDto.class);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(mapperUser);


    }

    @PostMapping
    @RequestMapping("/add-note")
    public ResponseEntity<Note> addNote(@RequestBody Note note) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) authentication.getPrincipal();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        note.setOwner(user);
        noteRepository.save(note);

        return ResponseEntity.ok(note);


    }

    @DeleteMapping
    @RequestMapping(("/delete-note/{id}"))
    public ResponseEntity<Note> deleteNote(@PathVariable(name = "id") Long id) {
        logger.error("logger");
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = (String) authentication.getPrincipal();
        User user = userRepository.findByEmail(email);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Note delted = noteRepository.findById(id).orElseThrow();
        logger.error(delted.getTitle());
        noteRepository.deleteById(id);



        return ResponseEntity.ok(delted);


    }
}
