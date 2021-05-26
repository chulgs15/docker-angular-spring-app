package com.example.backend.exception;

public class ApplicationException extends RuntimeException {
    private String message;

    public ApplicationException(String message) {
        super(message);
        this.message = message;
    }

    public String getErrorMsg() {
        return this.message;
    }

    @Override
    public String toString() {
        return "ApplicationException{" +
                "message='" + message + '\'' +
                "} " + super.toString();
    }
}
