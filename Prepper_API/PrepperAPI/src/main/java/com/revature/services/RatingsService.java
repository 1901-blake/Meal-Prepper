package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.Ratings;

public interface RatingsService {
	
	Ratings save(Ratings a);
	Ratings update(Ratings a);
	Ratings delete(Ratings a);
	
	List<Ratings> findAll();
	Ratings findById(int id);

}
