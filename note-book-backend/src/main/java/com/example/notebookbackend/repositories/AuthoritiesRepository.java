package com.example.notebookbackend.repositories;

import com.example.notebookbackend.entities.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthoritiesRepository extends JpaRepository<Authority,Long> {
}
