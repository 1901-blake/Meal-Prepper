package com.revature.services;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ingredient;
import com.revature.repos.IngredientsRepo;

@Service
public class IngredientServiceImpl implements IngredientService{
	@Autowired
	private IngredientsRepo ingredientsRepo;
	
	@Override
	public List<Ingredient> findAll() {
		return ingredientsRepo.findAll();
	}

}
