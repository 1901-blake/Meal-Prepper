package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.FullRecipe;


public interface FullRecipeRepo extends JpaRepository<FullRecipe, Integer>  {
	List<FullRecipe> findByName(String name);
	List<FullRecipe> findByDescription(String description);
	List<FullRecipe> findByIngredient(String ingredient);

}
