package com.revature.services;

import java.util.List;

import com.revature.model.Ingredient;
import com.revature.model.Recipe;
import com.revature.model.RecipeIngredient;

public interface RecipeService {
	
	Recipe save(Recipe r);
	Ingredient save(Ingredient i);
	Recipe update(Recipe r);
	Recipe delete(Recipe r);
	
	Recipe findById(int id);
	List<Recipe> findAll();
	List<Recipe> findByName(String name);
	List<Recipe> findByInstruction(String instructions);


}
