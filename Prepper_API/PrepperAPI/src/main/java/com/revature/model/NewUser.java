package com.revature.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Table(name = "users")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonFilter("depth_5")
public class NewUser {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String subkey;
	
	public NewUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NewUser(int id, String subkey) {
		super();
		this.id = id;
		this.subkey = subkey;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSubkey() {
		return subkey;
	}

	public void setSubkey(String subkey) {
		this.subkey = subkey;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((subkey == null) ? 0 : subkey.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		NewUser other = (NewUser) obj;
		if (id != other.id)
			return false;
		if (subkey == null) {
			if (other.subkey != null)
				return false;
		} else if (!subkey.equals(other.subkey))
			return false;
		return true;
	}
	
	

}
