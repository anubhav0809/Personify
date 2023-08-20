package com.anubhav.fullstackbackend.repository;

import com.anubhav.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
