package com.example.notebookbackend.controllers;

import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.repositories.NoteRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("/notes")
@CrossOrigin
public class UsersNotesController {
@Autowired
    private NoteRepository noteRepository;
    private static final Logger logger = LoggerFactory.getLogger(UsersNotesController.class);

    @RequestMapping("/{id}")
    public List<Note> getUsersNotes(@PathVariable(value = "id") Long id){
        List<Note> userNotes = noteRepository.findByOwner(id);
        return userNotes;


    }
    @PostMapping("/add/")
    public HttpStatus createNote(@RequestBody Note noteData) {

      noteRepository.save(noteData);
        return HttpStatus.CREATED;
    }


}
