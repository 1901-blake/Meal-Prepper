package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Users;
import com.revature.repos.UsersRepo;

@Service
public class UsersServiceImpl implements UsersService{

	@Autowired
	private UsersRepo usersRepo;
	
	@Override
	public Users save(Users u) {
		return usersRepo.save(u);
	}

	@Override
	public Users update(Users u) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users delete(Users u) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Users> findAll() {
		return usersRepo.findAll();
	}

	@Override
	public Users findById(int id) {
		return usersRepo.getOne(id);
	}

	@Override
	public List<Users> findBySubkey(String key) {
		return usersRepo.findBySubkey(key);
	}

}
