package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Meal;
import com.revature.services.MealService;

@RestController
@RequestMapping("meals")
public class MealController {
	@Autowired
	MealService mealService;
	
	@GetMapping
	public List<Meal> findAll() {
		return mealService.findAll();
	}
	
	
	@GetMapping("generate/{numOfRecipes}")
	public List<Meal> findRandomRecipes(@PathVariable int numOfRecipes) {
		List<Meal> fullList = mealService.findAll();
		List<Meal> buildList = new ArrayList<Meal> ();
		
		Random rand = new Random();
		
		for (int i = 0; i < numOfRecipes; i++) {
	        int randomIndex = rand.nextInt(fullList.size());
	        buildList.add(fullList.get(randomIndex));
	    }
		
		return buildList;
	}
}
