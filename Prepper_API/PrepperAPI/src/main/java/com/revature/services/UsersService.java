package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.Users;

public interface UsersService {
	
	Users save(Users u);
	Users update(Users u);
	Users delete(Users u);
	
	Users findById(int id);
	List<Users> findAll();
	List<Users> findBySubkey(String key);
	
}
