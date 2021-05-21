package com.example.backend.service;

import com.example.backend.domain.AccountUser;
import com.example.backend.dto.AccountUserDto;
import com.example.backend.repository.AccountUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final AccountUserRepository userRepo;

    public void createUser(AccountUserDto dto) {
        AccountUser accountUser = Optional.ofNullable(userRepo.findByuserName(dto.getUserName()))
                .orElse(new AccountUser(dto));
        userRepo.save(accountUser);
    }
}
