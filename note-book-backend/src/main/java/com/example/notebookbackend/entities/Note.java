package com.example.notebookbackend.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name ="note")
@Builder

@AllArgsConstructor
@NoArgsConstructor
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String content;

    @Enumerated(EnumType.STRING)
    private NoteCategory noteCategory;

    @ManyToOne
    @JoinColumn(name ="user_id" )
    private User owner;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public NoteCategory getNoteCategory() {
        return noteCategory;
    }

    public void setNoteCategory(NoteCategory noteCategory) {
        this.noteCategory = noteCategory;
    }

    @Override
    public String toString() {
        return "Note{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", content='" + content + '\'' +
                ", noteCategory=" + noteCategory +
                '}';
    }
}
