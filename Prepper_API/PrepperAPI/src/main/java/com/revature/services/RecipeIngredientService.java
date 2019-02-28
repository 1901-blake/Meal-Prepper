package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.Ingredient;
import com.revature.model.RecipeIngredient;

public interface RecipeIngredientService {
	RecipeIngredient save(RecipeIngredient r);
	RecipeIngredient update(RecipeIngredient r);
	RecipeIngredient delete(RecipeIngredient r);
	
	List<RecipeIngredient> findAll();
	RecipeIngredient findById(int id);
}
