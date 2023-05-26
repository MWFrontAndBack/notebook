package com.example.notebookbackend;

import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.repositories.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.List;

@SpringBootApplication
@EnableJpaRepositories
public class NoteBookBackendApplication {


	public static void main(String[] args) {
		SpringApplication.run(NoteBookBackendApplication.class, args);

	}


}
