package com.revature.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Recipe;
import com.revature.repos.RecipeRepo;

@Service
public class RecipeServiceImpl implements RecipeService{
	
	@Autowired
	private RecipeRepo recipeRepo;

	@Override
	public Recipe save(Recipe r) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Recipe update(Recipe r) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Recipe delete(Recipe r) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recipe> findAll() {
		return recipeRepo.findAll();
	}

	@Override
	public Recipe findById(int id) {
		return recipeRepo.getOne(id);
	
	}

	@Override
	public List<Recipe> findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recipe> findByInstruction(String instructions) {
		// TODO Auto-generated method stub
		return null;
	}

	/*@Override
	public List<Recipe> findByAvg_rating(int avg_rating) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Recipe> findByNum_ratings(int num_ratings) {
		// TODO Auto-generated method stub
		return null;
	}*/
	
	
}
