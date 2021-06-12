package com.example.backend.domain;


import javax.persistence.*;

@Entity
@Table(name = "account_user", indexes = {@Index(name = "ACCOUNT_USER_U1", columnList = "user_name")})
public class AccountUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String password;
}
