package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ingredient;

public interface IngredientsRepo extends JpaRepository<Ingredient, Integer>{

}
