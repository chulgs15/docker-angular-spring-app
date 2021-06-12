package com.example.backend.repository;

import com.example.backend.domain.AccountUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountUserRepository extends JpaRepository<AccountUser, Long> {
    AccountUser findByuserNameAndPassword(String userName, String password);
}
