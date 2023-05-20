package com.example.notebookbackend.repositories;

import com.example.notebookbackend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    @Query("SELECT n FROM User n WHERE n.loginName= :login")
    User findByLoginName(String login);

    @Query("SELECT n FROM User n WHERE n.email= :email")
    User findByEmail(String email);

}
