package com.productivepal.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.productivepal.app.model.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}
