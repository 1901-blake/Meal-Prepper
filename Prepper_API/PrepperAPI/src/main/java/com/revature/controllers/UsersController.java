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
	
	@GetMapping("subkey/{key}")
	public List<Users> findBySubkey(@PathVariable String key) {
		return usersService.findBySubkey(key);
	}
		
	@PostMapping("/history")
	public Users history(@Valid @RequestBody Users history) {
		List<Users> allUsers = usersService.findAll();

		boolean duplicateefound = false;
		
		for (int i = 0; i < allUsers.size(); i++) {
			
			if (allUsers.get(i).getId() == history.getId()) {
				System.out.println("current user size: " + history.getRatinginfo().size() + "Table User size: "+ allUsers.get(i).getRatinginfo().size());
				for (int j = 0; j < allUsers.get(i).getRatinginfo().size(); j++) {
					
					if (allUsers.get(i).getRatinginfo().get(j).getRecipe().getId() == history.getRatinginfo().get(0).getRecipe().getId()) {
						
						duplicateefound = true;
					
					}

			}
			
		}
		
	}
		if (duplicateefound) {
			return null;
		}else {
			return usersService.save(history);
		}
	}
	
}
