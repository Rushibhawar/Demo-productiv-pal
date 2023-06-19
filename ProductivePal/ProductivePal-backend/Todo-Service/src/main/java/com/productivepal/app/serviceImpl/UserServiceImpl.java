package com.productivepal.app.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.productivepal.app.repository.UserRepository;

@Service
public class UserServiceImpl {

	@Autowired
	private UserRepository userRepository;
}
