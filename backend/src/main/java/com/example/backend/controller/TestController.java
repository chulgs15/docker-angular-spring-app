package com.example.backend.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping(value = {"/api/hello"}, produces = MediaType.TEXT_PLAIN_VALUE)
    public String helloWorld() {
        return "hello world";
    }

    @GetMapping(value = {"/api/hello/{name}"})
    public String helloWorld(@PathVariable(value = "name") String name) {
        return "hello world " + name;
    }

}
