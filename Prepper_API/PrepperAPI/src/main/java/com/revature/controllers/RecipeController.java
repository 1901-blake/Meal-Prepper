package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Recipe;
import com.revature.services.RecipeService;

@RestController
@RequestMapping("recipes")
public class RecipeController {
	
	@Autowired
	private RecipeService recipeService;

	@GetMapping
	public List<Recipe> findAll() {
		return recipeService.findAll();
	}

	@GetMapping("{id}")
	public Recipe findById(@PathVariable int id) {
		return recipeService.findById(id);
	}
	
	/*@GetMapping("/Avg_rating/{avg_rating}")
	public List<Recipe> findByAvg_rating(@PathVariable int avg_rating) {
		// TODO Auto-generated method stub
		return recipeService.findByAvg_rating(avg_rating);
	}*/
}
