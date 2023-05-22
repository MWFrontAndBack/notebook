package com.example.notebookbackend.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "admin")
@Getter
@Setter
@NoArgsConstructor

public class Admin extends User{

    public Admin(List<Note> noteList, String loginName, String email, String password, String photo) {
        super(noteList, loginName, email, password, photo);
    }


}
