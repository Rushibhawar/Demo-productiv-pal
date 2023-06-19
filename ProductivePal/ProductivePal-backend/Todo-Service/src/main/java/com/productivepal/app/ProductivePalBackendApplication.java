package com.productivepal.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ProductivePalBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductivePalBackendApplication.class, args);
	}

}
