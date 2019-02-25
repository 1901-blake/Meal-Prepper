package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.Recipe;

public interface RecipeService {
	
	Recipe save(Recipe r);
	Recipe update(Recipe r);
	Recipe delete(Recipe r);
	
	List<Recipe> findAll();
	Recipe findById(int id);
	List<Recipe> findByName(String name);
	List<Recipe> findByInstruction(String instructions);	


}
