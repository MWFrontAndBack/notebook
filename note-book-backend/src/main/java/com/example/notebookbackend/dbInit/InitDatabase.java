package com.example.notebookbackend.dbInit;

import com.example.notebookbackend.entities.Note;
import com.example.notebookbackend.entities.NoteCategory;
import com.example.notebookbackend.entities.User;
import com.example.notebookbackend.repositories.NoteRepository;
import com.example.notebookbackend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class InitDatabase {
    @Bean
    CommandLineRunner commandLineRunner(NoteRepository noteRepository,UserRepository userRepository)
        {
            return args -> {

                User user = User.builder()
                        .photo("photo")
                        .loginName("kacper")
                        .password("haslo")
                        .build();
                Note note1 = Note.builder()
                        .title("Meeting Notes")
                        .content("Discussion about project timeline and deliverables.")
                        .noteCategory(NoteCategory.FAMILY)
                        .owner(user)
                        .build();

                Note note2 = Note.builder()
                        .title("Recipe Idea")
                        .content("A new recipe for a delicious pasta dish with fresh ingredients.")
                        .noteCategory(NoteCategory.FAMILY)
                        .owner(user)
                        .build();

                Note note3 = Note.builder()
                        .title("Travel Recommendations")
                        .content("Must-visit places and hidden gems in a popular travel destination.")
                        .noteCategory(NoteCategory.HOBBY)
                        .owner(user)
                        .build();

                Note note4 = Note.builder()
                        .title("Book Review")
                        .content("Thoughts and insights on an inspiring novel I recently read.")
                        .noteCategory(NoteCategory.FAMILY)
                        .owner(user)
                        .build();

                Note note5 = Note.builder()
                        .title("Fitness Tips")
                        .content("Useful exercises and diet recommendations for maintaining a healthy lifestyle.")
                        .noteCategory(NoteCategory.SPORT)
                        .owner(user)
                        .build();

                user.setNoteList(Arrays.asList(note1,note2,note3,note4,note5));

                userRepository.save(user);

            };

    }
}
