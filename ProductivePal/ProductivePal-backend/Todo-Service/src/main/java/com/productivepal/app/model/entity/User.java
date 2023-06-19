package com.productivepal.app.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
	@Id
	@Column(name = "user_id")
    private String userId;	
    
	@Column(name = "user_name", length = 50)
    private String userName;
	
	@Column(name = "user_email",unique = true)
    private String userEmail;
	
	@Column(name = "user_password", length = 50)
    private String userPassword;
    
    @Column(name = "user_date_of_birth")
	@Temporal(TemporalType.DATE)
    private Date userDateOfBirth;
    
    @Column(name = "user_phone_number", length = 15)
    private String userPhone;
    
}
