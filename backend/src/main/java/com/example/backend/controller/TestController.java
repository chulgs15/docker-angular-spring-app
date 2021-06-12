package com.example.backend.controller;

import com.example.backend.domain.AccountUser;
import com.example.backend.repository.AccountUserRepository;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class TestController {

    private final AccountUserRepository userRepository;

    @GetMapping(value = {"/api/hello"})
    public Map<String, String> helloWorld() {
        Map<String, String> map = new HashMap<>();
        map.put("message", "hello world");
        return map;
    }

    @PostMapping(value = {"/api/user"})
    public Map<String, String> isUserExist(@RequestBody LoginDto dto) {
        Map<String, String> map = new HashMap<>();

        AccountUser user = userRepository.findByuserNameAndPassword(dto.getUserName(), dto.getPassword());

        if (user == null) {
            map.put("message", dto.getUserName() + " is not exists");
        } else {
            map.put("message", "hello " + dto.getUserName());
        }

        return map;
    }

    @Data
    public static class LoginDto {
        private String userName;
        private String password;

        public LoginDto(String userName, String password) {
            this.userName = userName;
            this.password = password;
        }
    }

}
