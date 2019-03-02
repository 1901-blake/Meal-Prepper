package com.revature.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.NewUser;
import com.revature.services.NewUserService;

@RestController
@RequestMapping("users")
public class NewUserController {
	
	@Autowired
	private NewUserService newuserService;
	
	@PostMapping("/newUser")
	public NewUser user(@Valid @RequestBody NewUser newUser) {
		return newuserService.save(newUser);
	}

}
