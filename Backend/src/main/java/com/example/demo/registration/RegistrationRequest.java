package com.example.demo.registration;

public record RegistrationRequest(
        String userAddress,
        String userPhone,
        String userName,
        String userMail,
        String userPass,
        String role) {
}
