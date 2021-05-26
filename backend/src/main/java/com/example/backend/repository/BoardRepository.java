package com.example.backend.repository;

import com.example.backend.domain.AccountUser;
import com.example.backend.domain.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByUser(AccountUser user);
}
