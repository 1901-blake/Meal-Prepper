package com.revature.repos;

import java.util.List;

import com.revature.model.Meal;

public interface MealRepo {
	List<Meal> findByName(String name);
	Meal findById(int id);
}
