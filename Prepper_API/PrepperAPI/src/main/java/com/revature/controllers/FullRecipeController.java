package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.FullRecipe;
import com.revature.services.FullRecipeService;

@RestController
@RequestMapping("full_recipe")
public class FullRecipeController {
	
	@Autowired
	private FullRecipeService fullrecipeService;

	@GetMapping
	public List<FullRecipe> findAll() {
		return fullrecipeService.findAll();
	}
	
	@GetMapping("{name}")
	public List<FullRecipe> findByName(@PathVariable String name) {
		return fullrecipeService.findByName(name);
	}
	
	@GetMapping("{description}")
	public List<FullRecipe> findByDescription(@PathVariable String description) {
		return fullrecipeService.findByDescription(description);
	}
	
	@GetMapping("{ingredient}")
	public List<FullRecipe> findByIngredient(@PathVariable String ingredient) {
		return fullrecipeService.findByIngredient(ingredient);
	}
	
	@GetMapping("generate/{numOfRecipes}")
	public List<FullRecipe> findRandomRecipes(@PathVariable int numOfRecipes) {
		List<FullRecipe> fullList = fullrecipeService.findAll();
		List<FullRecipe> buildList = new ArrayList<FullRecipe> ();
		
		Random rand = new Random();
		
		for (int i = 0; i < numOfRecipes; i++) {
	        int randomIndex = rand.nextInt(fullList.size());
	        buildList.add(fullList.get(randomIndex));
	    }
		
		return buildList;
	}
}
