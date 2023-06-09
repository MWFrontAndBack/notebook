package com.example.notebookbackend.repositories;

import com.example.notebookbackend.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note,Long> {
    @Query("SELECT n FROM Note n WHERE n.owner.id = :id")
    List<Note> findByOwner(Long id);



}
