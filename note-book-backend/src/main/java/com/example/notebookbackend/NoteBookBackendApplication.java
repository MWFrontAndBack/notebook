package com.example.notebookbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class NoteBookBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NoteBookBackendApplication.class, args);
	}

}
