package com.revature.services;

import java.util.List;
import java.util.Set;

import com.revature.model.Measure;

public interface MeasureService {
	
	Measure save(Measure m);
	Measure update(Measure m);
	Measure delete(Measure m);
	
	List<Measure> findAll();
	Measure findById(int id);
	List<Measure> findByName(String name);
	


}
