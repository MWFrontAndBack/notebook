package com.example.notebookbackend.controllers.users;


import com.example.notebookbackend.entities.User;

public class LoginResponse {
    private boolean success;
    private String message;
    private User user;

    public LoginResponse(User user) {
        this.user = user;
    }

    public LoginResponse() {
    }

    public LoginResponse(String message, User user) {
        this.message = message;
        this.user = user;
    }

    public LoginResponse(boolean success, String message, User user) {
        this.success = success;
        this.message = message;
        this.user = user;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

