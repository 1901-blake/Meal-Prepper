package com.revature.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Ratings;

public interface RatingsRepo  extends JpaRepository<Ratings, Integer>{
	
}
