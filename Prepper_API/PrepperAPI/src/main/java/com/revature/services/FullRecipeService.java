package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.FullRecipe;
import com.revature.model.Recipe;

public interface FullRecipeService {
	
	FullRecipe save(FullRecipe f);
	FullRecipe update(FullRecipe f);
	FullRecipe delete(FullRecipe f);
	
	List<FullRecipe> findAll();
	List<FullRecipe> findByName(String name);
	List<FullRecipe> findByDescription(String description);
	List<FullRecipe> findByIngredient(String ingredient);


}
