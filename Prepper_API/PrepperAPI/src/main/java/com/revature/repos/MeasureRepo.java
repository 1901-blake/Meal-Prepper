package com.revature.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.model.Measure;

public interface MeasureRepo extends JpaRepository<Measure, Integer> {
	
	List<Measure> findByName(String name);

}
