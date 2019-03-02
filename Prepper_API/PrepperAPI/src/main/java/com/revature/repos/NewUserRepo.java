package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.NewUser;

public interface NewUserRepo extends JpaRepository<NewUser, Integer> {

}
