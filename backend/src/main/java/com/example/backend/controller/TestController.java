package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TestController {

    @GetMapping(value = {"/api/hello"})
    public Map<String, String> helloWorld() {
        System.out.println("hello world");
        Map<String, String> map = new HashMap<>();
        map.put("message", "hello world");
        return map;
    }
}
