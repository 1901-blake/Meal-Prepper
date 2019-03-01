package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ingredient;

public interface IngredientsRepo extends JpaRepository<Ingredient, Integer>{

}
