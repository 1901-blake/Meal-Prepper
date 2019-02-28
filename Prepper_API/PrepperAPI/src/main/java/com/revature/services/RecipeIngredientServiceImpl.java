package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ingredient;
import com.revature.model.RecipeIngredient;
import com.revature.repos.RecipeIngredientRepo;

@Service
public class RecipeIngredientServiceImpl implements RecipeIngredientService{

	@Autowired
	private RecipeIngredientRepo recipeIngredientRepo;
	
	@Override
	public RecipeIngredient save(RecipeIngredient r) {
		return recipeIngredientRepo.save(r);
	}

	@Override
	public RecipeIngredient update(RecipeIngredient r) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public RecipeIngredient delete(RecipeIngredient r) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<RecipeIngredient> findAll() {
		return recipeIngredientRepo.findAll();
	}

	@Override
	public RecipeIngredient findById(int id) {
		return recipeIngredientRepo.getOne(id);
	}

}
