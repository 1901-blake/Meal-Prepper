package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Measure;
import com.revature.repos.MeasureRepo;

@Service
public class MeasureServiceImpl implements MeasureService{
	
	@Autowired
	private MeasureRepo measureRepo;

	@Override
	public Measure save(Measure m) {
		return measureRepo.save(m);
	}

	@Override
	public Measure update(Measure m) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Measure delete(Measure m) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Measure> findAll() {
		return measureRepo.findAll();
	}

	@Override
	public Measure findById(int id) {
		return measureRepo.getOne(id);
	}

	@Override
	public List<Measure> findByName(String name) {
		return measureRepo.findByName(name);
	}

}
