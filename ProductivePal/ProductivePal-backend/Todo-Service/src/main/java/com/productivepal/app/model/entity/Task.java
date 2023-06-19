package com.productivepal.app.model.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;



@Entity
@Table(name = "task_table")
public class Task {

	@Id
	@Column(name = "task_id")
	private String taskId;
	
	@Column(name = "task_name", length = 100)
	private String taskName;
	
	@Column(name = "task_description", length = 1000)
	private String taskDescription;
	
	@Column(name = "task_due_date")
	@Temporal(TemporalType.DATE)
	private Date taskDueDate;
}
