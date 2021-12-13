package com.app.spring.emp;

import org.springframework.stereotype.Component;

@Component("emp")
public class Employee {
	public void details() {
		System.out.println("Employee details");
	}

}
