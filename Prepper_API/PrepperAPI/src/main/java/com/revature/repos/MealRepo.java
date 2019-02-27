package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Meal;

public interface MealRepo extends JpaRepository<Meal, Integer> {
	List<Meal> findByName(String name);
	Meal findById(int id);
}
