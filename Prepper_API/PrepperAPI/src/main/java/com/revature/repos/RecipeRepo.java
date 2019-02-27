package com.revature.repos;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ingredient;
import com.revature.model.Recipe;

public interface RecipeRepo extends JpaRepository<Recipe, Integer> {
	List<Recipe> findByName(String name);
	List<Recipe> findByDescription(String description);
	List<Recipe> findByInstructions(String instructions);
	Ingredient save(Ingredient i);

}
