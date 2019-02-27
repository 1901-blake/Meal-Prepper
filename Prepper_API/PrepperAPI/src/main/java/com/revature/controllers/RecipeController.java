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

import com.revature.model.Ingredient;
import com.revature.model.Measure;
import com.revature.model.Recipe;
import com.revature.services.MeasureService;
import com.revature.services.RecipeService;

@RestController
@RequestMapping("recipe")
public class RecipeController {
	
	@Autowired
	private RecipeService recipeService;
	@Autowired
	private MeasureService measureService;

	@GetMapping
	public List<Recipe> findAll() {
		return recipeService.findAll();
	}

	@GetMapping("{id}")
	public Recipe findById(@PathVariable int id) {
		return recipeService.findById(id);
	}
	
	@PostMapping("/recipe")
	public Recipe newRecipe(@Valid @RequestBody Recipe recipe) {
		return recipeService.save(recipe);
	}
	
	@PostMapping("/measure")
	public Measure newMeasure(@Valid @RequestBody Measure measure) {
		return measureService.save(measure);
	}
	
	@PostMapping("/ingredient")
	public Ingredient newIngredient(@Valid @RequestBody Ingredient i) {
		return recipeService.save(i);
	}
	
	
	
	
}
