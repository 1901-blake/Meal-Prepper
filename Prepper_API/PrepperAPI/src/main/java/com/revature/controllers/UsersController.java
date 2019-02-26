package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Users;
import com.revature.services.UsersService;

@RestController
@RequestMapping("users")
public class UsersController {
	
	@Autowired
	private UsersService usersService;

	@GetMapping
	public List<Users> findAll() {
		return usersService.findAll();
	}

	@GetMapping("{id}")
	public Users findById(@PathVariable int id) {
		return usersService.findById(id);
	}
	
	@GetMapping("{username}")
	public List<Users> findByUsername(@PathVariable String username) {
		return usersService.findByUsername(username);
	}
	
	@GetMapping("{firstname}")
	public List<Users> findByFirstname(@PathVariable String firstname) {
		return usersService.findByFirstname(firstname);
	}
	
	@GetMapping("{lastname}")
	public List<Users> findByLastname(@PathVariable String lastname) {
		return usersService.findByLastname(lastname);
	}

}
