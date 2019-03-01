package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Recipe;
import com.revature.services.RecipeService;

@RestController
@RequestMapping("recipe")
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
	
	@GetMapping("category/{description}")
	public List<Recipe> findByDescription(@PathVariable String description) {
		return recipeService.findByDescription(description);
	}
	
	//generate random number of recipes
	@GetMapping("generate/{numOfRecipes}")
	public List<Recipe> findRandomRecipes(@PathVariable int numOfRecipes) {
		List<Recipe> fullList = recipeService.findAll();
		List<Recipe> buildList = new ArrayList<Recipe> ();
		
		Random rand = new Random();
		
		for (int i = 0; i < numOfRecipes; i++) {
	        int randomIndex = rand.nextInt(fullList.size());
	        buildList.add(fullList.get(randomIndex));
	    }
		
		return buildList;
	}
	
		
	@GetMapping("generate/{numOfRecipes}/{description}")
	public List<Recipe> findRandomRecipe(@PathVariable int numOfRecipes, String description) {
		List<Recipe> fullList = recipeService.findByDescription(description);//findByCategory
		
		List<Recipe> buildList = new ArrayList<Recipe> ();
	
		Random rand = new Random();
		
		for (int i = 0; i < numOfRecipes; i++) {
	        int randomIndex = rand.nextInt(fullList.size());
	        buildList.add(fullList.get(randomIndex));
	     
	    }
		
		return buildList;
	}
		
	//create new recipe
	@PostMapping("/createRecipe")
	public Recipe newRecipe(@Valid @RequestBody Recipe recipe) {
		return recipeService.save(recipe);
	}
	
	
}
