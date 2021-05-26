package com.example.backend.controller;

import com.example.backend.exception.ApplicationException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
@Slf4j
public class ControllerExceptionHandler {
    @ExceptionHandler(ApplicationException.class)
    protected ResponseEntity<ErrorResponse> handleCustomException(ApplicationException e) {
        return new ResponseEntity<ErrorResponse>(new ErrorResponse(e), HttpStatus.BAD_REQUEST);
    }

    @Getter
    private static class ErrorResponse {
        private String message;

        public ErrorResponse() {
        }

        public ErrorResponse(ApplicationException e) {
            this.message = e.getErrorMsg();
        }
    }
}
