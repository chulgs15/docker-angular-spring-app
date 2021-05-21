package com.example.backend.domain;

import com.example.backend.dto.AccountUserDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "fnd_user", indexes = {@Index(name = "FND_USER_U1", columnList = "user_name", unique = true)})
@Getter
public class AccountUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "user_name", length = 255)
    private String userName;

    @Column(name = "password", length = 300)
    private String password;

    @Column(name = "start_date", nullable = false)
    private LocalDateTime startDate;

    @Column(name = "end_date")
    private LocalDateTime endDate;

    @CreationTimestamp
    @Column(name = "creation_date")
    private LocalDateTime creationDate;

    @UpdateTimestamp
    @Column(name = "last_update_date")
    private LocalDateTime lastUpdateDate;

    public AccountUser() {
    }

    @Builder
    public AccountUser(String userName, String password, LocalDateTime endDate) {
        this.userName = userName;
        this.password = password;
        this.startDate = LocalDateTime.now();
        this.endDate = endDate;
    }

    public AccountUser(AccountUserDto dot) {
        this(dot.getUserName(), dot.getPassword(), null);
    }

    @Override
    public String toString() {
        return "AccountUser{" +
                "userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", creationDate=" + creationDate +
                ", lastUpdateDate=" + lastUpdateDate +
                '}';
    }
}
