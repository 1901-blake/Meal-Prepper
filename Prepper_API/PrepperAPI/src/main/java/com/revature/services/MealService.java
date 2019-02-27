package com.revature.services;

import java.util.List;

import com.revature.model.Meal;

public interface MealService {
	Meal save(Meal f);
	Meal update(Meal f);
	Meal delete(Meal f);
	
	List<Meal> findAll();
	List<Meal> findByName(String name);
	Meal findById(Integer id);
}
