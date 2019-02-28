package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ingredient;
import com.revature.model.RecipeIngredient;

public interface RecipeIngredientRepo extends JpaRepository<RecipeIngredient, Integer> {

}
