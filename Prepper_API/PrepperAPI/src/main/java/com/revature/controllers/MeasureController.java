package com.revature.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Measure;
import com.revature.services.MeasureService;


@RestController
@RequestMapping("measure")
public class MeasureController {
	@Autowired
	private MeasureService measureService;

	@GetMapping
	public List<Measure> findAll() {
		return measureService.findAll();
	}

	@GetMapping("{id}")
	public Measure findById(@PathVariable int id) {
		return measureService.findById(id);
	}
	
	@GetMapping("name/{name}")
	public List<Measure> findByName(@PathVariable String name) {
		return measureService.findByName(name);
	}

}
