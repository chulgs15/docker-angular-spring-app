package com.example.backend.controller;

import com.example.backend.domain.AccountUser;
import com.example.backend.dto.AccountUserDto;
import com.example.backend.repository.AccountUserRepository;
import com.example.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/user")
@RequiredArgsConstructor
@Slf4j
public class UserController {

    private final UserService userService;
    private final AccountUserRepository userRepo;

    @GetMapping(value = "/{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
    public AccountUser helloWorld(@PathVariable(value = "userName") String userName) {
        return userRepo.findByuserName(userName);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public void createUser(@RequestBody AccountUserDto dto) {
        userService.createUser(dto);
    }
}
