package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ingredient;
import com.revature.model.Recipe;
import com.revature.model.RecipeIngredient;

public interface RecipeRepo extends JpaRepository<Recipe, Integer> {
	Ingredient save(Ingredient i);
	List<Recipe> findByName(String name);
	List<Recipe> findByDescription(String description);


}
