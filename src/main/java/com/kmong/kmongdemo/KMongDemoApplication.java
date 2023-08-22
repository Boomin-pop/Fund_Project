package com.kmong.kmongdemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class KMongDemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(KMongDemoApplication.class, args);
		System.out.println("kMongDemoApplication args : "+List.of(args));
	}

}
