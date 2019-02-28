package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ratings;

public interface RatingsRepo  extends JpaRepository<Ratings, Integer>{
	
}
