package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Ratings;
import com.revature.services.RatingsService;

@RestController
@RequestMapping("ratings")
public class RatingsController {
	@Autowired
	private RatingsService ratingsService;

	@GetMapping
	public List<Ratings> findAll() {
		return ratingsService.findAll();
	}
	
	@GetMapping("{id}")
	public Ratings findById(@PathVariable int id) {
		return ratingsService.findById(id);
	}

}
