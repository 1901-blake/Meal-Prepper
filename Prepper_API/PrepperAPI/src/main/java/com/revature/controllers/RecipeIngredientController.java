package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.revature.model.Ingredient;
import com.revature.model.RecipeIngredient;
import com.revature.services.RecipeIngredientService;


@RestController
@RequestMapping("recipeingredient")
public class RecipeIngredientController {
	
	@Autowired
	private RecipeIngredientService recipeingredientService;

	@GetMapping
	public List<RecipeIngredient> findAll() {
		return recipeingredientService.findAll();
	}
	
	//only gets one ingredient because I specified that in the serviceimpl
	@GetMapping("{id}")
	public RecipeIngredient findById(@PathVariable int id) {
		return recipeingredientService.findById(id);
	}
	
}
