package com.revature.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.FullRecipe;
import com.revature.repos.FullRecipeRepo;
import com.revature.repos.RecipeRepo;

@Service
public class FullRecipeServiceImpl implements FullRecipeService {
	
	@Autowired
	private FullRecipeRepo fullrecipeRepo;

	@Override
	public FullRecipe save(FullRecipe f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FullRecipe update(FullRecipe f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public FullRecipe delete(FullRecipe f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<FullRecipe> findAll() {
		return fullrecipeRepo.findAll();
	}

	@Override
	public List<FullRecipe> findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<FullRecipe> findByDescription(String description) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<FullRecipe> findByIngredient(String ingredient) {
		// TODO Auto-generated method stub
		return null;
	}

}
