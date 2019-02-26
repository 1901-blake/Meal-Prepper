package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
