package com.example.backend.controller;

import com.example.backend.domain.AccountUser;
import com.example.backend.domain.Board;
import com.example.backend.exception.ApplicationException;
import com.example.backend.repository.AccountUserRepository;
import com.example.backend.repository.BoardRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
@RequiredArgsConstructor
public class TestController {

    private final AccountUserRepository userRepository;
    private final BoardRepository boardRepository;

    @GetMapping(value = "/api/hello")
    public String helloWorld() {
        log.info("hello world is coming");
        System.out.println("hello world");
        return "hello world";
    }

    @PostMapping(value = {"/api/user/loginProcess"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public LoginDto loginProcess(@RequestBody LoginDto loginDto) {
        AccountUser user = userRepository.findById(loginDto.userName)
                .orElseThrow(() -> new ApplicationException("No User in Service"));

        if (!user.getPassword().equals(loginDto.getPassword())) {
            throw new ApplicationException("Password Invalid");
        }

        return loginDto;
    }

    @PostMapping(value = {"/api/user/register"}, produces = MediaType.APPLICATION_JSON_VALUE)
    public void registerUser(@RequestBody LoginDto loginDto) {
        AccountUser user = userRepository.findById(loginDto.getUserName())
                .orElse(AccountUser.builder()
                        .userName(loginDto.getUserName())
                        .password(loginDto.getPassword())
                        .build());

        userRepository.save(user);
    }


    @PostMapping("/api/board/register")
    public void registerBoard(@RequestBody BoardDto boardDto) {
        AccountUser user = userRepository.findById(boardDto.userName)
                .orElseThrow(() -> new ApplicationException("No User in Service"));

        Board board = Board.builder()
                .message(boardDto.getMessage())
                .user(user)
                .build();

        boardRepository.save(board);
    }

    @GetMapping(value = "/api/board/user={userName}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Board> getBoardListByUserName(@PathVariable("userName") String userName) {
        AccountUser user = userRepository.findById(userName)
                .orElseThrow(() -> new ApplicationException("No User in application"));
        return user.getBoardList();
    }

    @GetMapping(value = "/api/board/")
    public List<Board> getBoardList()  {
        return boardRepository.findAll();
    }

    @Getter
    private static class LoginDto{
        private String userName;
        private String password;

        public LoginDto() {
        }

        public LoginDto(String userName, String password) {
            this.userName = userName;
            this.password = password;
        }
    }

    @Getter
    private static class BoardDto{
        private String userName;
        private String message;

        public BoardDto() {
        }
    }

}
