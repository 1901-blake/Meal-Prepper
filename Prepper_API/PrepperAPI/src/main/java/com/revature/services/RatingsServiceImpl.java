package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ratings;
import com.revature.repos.RatingsRepo;

@Service
public class RatingsServiceImpl implements RatingsService{
	
	@Autowired
	private RatingsRepo ratingsRepo;

	@Override
	public Ratings save(Ratings a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Ratings update(Ratings a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Ratings delete(Ratings a) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Ratings> findAll() {
		return ratingsRepo.findAll();
	}

	@Override
	public Ratings findById(int id) {
		return ratingsRepo.getOne(id);
	}

	

}
