package com.revature.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.NewUser;
import com.revature.repos.NewUserRepo;

@Service
public class NewUserServiceImpl implements NewUserService {
	
	@Autowired
	private NewUserRepo newuserRepo;
	
	@Override
	public NewUser save(NewUser u) {
		return newuserRepo.save(u);
	}

}
