package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Meal;
import com.revature.repos.MealRepo;

@Service
public class MealServiceImpl implements MealService{
	
	@Autowired
	private MealRepo mealRepo;

	@Override
	public Meal save(Meal f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Meal update(Meal f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Meal delete(Meal f) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Meal> findAll() {
		// TODO Auto-generated method stub
		return mealRepo.findAll();
	}

	@Override
	public List<Meal> findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Meal findById(Integer id) {
		// TODO Auto-generated method stub
		return mealRepo.getOne(id);
	}
}
