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
	private UsersService UsersService;

	@GetMapping
	public List<Users> findAll() {
		return UsersService.findAll();
	}

	@GetMapping("{id}")
	public Users findById(@PathVariable int id) {
		return UsersService.findById(id);
	}
	
	@GetMapping("{username}")
	public List<Users> findByUsername(@PathVariable String username) {
		return UsersService.findByUsername(username);
	}
	
	@GetMapping("{firstname}")
	public List<Users> findByFirstname(@PathVariable String firstname) {
		return UsersService.findByFirstname(firstname);
	}
	
	@GetMapping("{lastname}")
	public List<Users> findByLastname(@PathVariable String lastname) {
		return UsersService.findByLastname(lastname);
	}

}
