package com.app.spring.SpringCore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.app.spring.emp.Employee;
import com.app.spring.emp.EmployeeConfig;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
       ApplicationContext context = new AnnotationConfigApplicationContext(EmployeeConfig.class);
       Employee emp = (Employee) context.getBean("emp");
       emp.details();
		/*
		 * Employee employee = context.getBean("employee",emp.getClass());
		 * employee.details();
		 */
       
    }
}
