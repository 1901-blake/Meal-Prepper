package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ingredient;
import com.revature.model.Recipe;
import com.revature.repos.IngredientsRepo;
import com.revature.repos.MeasureRepo;
import com.revature.repos.RecipeRepo;

@Service
public class RecipeServiceImpl implements RecipeService {

	@Autowired
	private RecipeRepo recipeRepo;
	
	@Autowired
	private IngredientsRepo ingredientRepo;

	@Autowired
	private MeasureRepo measureRepo;
	
	@Transactional
	@Override
	public Recipe save(Recipe r) {
		r.getIngredients().forEach(recipeIngredient -> {
			
			recipeIngredient.setRecipe(r);
			
			if (recipeIngredient.getIngredient().getId() == 0) {
				ingredientRepo.save(recipeIngredient.getIngredient());
			}
			
			if (recipeIngredient.getMeasure().getId() == 0) {
				measureRepo.save(recipeIngredient.getMeasure());
			}
			
			System.out.println(recipeIngredient);			
			
		});
		
		return recipeRepo.save(r);
	}

	@Override
	public Ingredient save(Ingredient i) {
		return recipeRepo.save(i);
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

	@Override
	public List<Recipe> findByDescription(String description) {
		return recipeRepo.findByDescription(description);
	}


}
