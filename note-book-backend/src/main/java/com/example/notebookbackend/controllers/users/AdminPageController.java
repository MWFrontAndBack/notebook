package com.example.notebookbackend.controllers.users;

import com.example.notebookbackend.dto.UserDto;
import com.example.notebookbackend.dto.mapper.mapperUtil.MapperUtil;
import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.entities.User;
import com.example.notebookbackend.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/public/admin-page")
@CrossOrigin(origins = "*")
public class AdminPageController {

    private UserRepository userRepository;

    public AdminPageController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping@CrossOrigin


    public ResponseEntity<List<UserDto>> getUsers(){
        List<User> all = userRepository.findAll();
        List<UserDto> listmapped = all.stream().map(a -> MapperUtil.map(a, UserDto.class)).toList();
        if(all.isEmpty()){
            return (ResponseEntity<List<UserDto>>) ResponseEntity.notFound();

        }
        return ResponseEntity.ok(listmapped);
    }

    @DeleteMapping
    @RequestMapping(("/delete-user/{id}"))
    public ResponseEntity<User> deleteNote(@PathVariable(name = "id") Long id) {

        User user = userRepository.findById(id).orElseThrow();
        userRepository.delete(user);


        return ResponseEntity.ok(user);
    }
}
