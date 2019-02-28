package com.revature.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Table(name = "users")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String subkey;

	@OneToMany(mappedBy = "user")
	@JsonIgnore
    private Set<Ratings> newuser;
	
	
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Users(int id, String subkey, Set<Ratings> newuser) {
		super();
		this.id = id;
		this.subkey = subkey;
		this.newuser = newuser;
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


	public Set<Ratings> getNewuser() {
		return newuser;
	}


	public void setNewuser(Set<Ratings> newuser) {
		this.newuser = newuser;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((newuser == null) ? 0 : newuser.hashCode());
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
		Users other = (Users) obj;
		if (id != other.id)
			return false;
		if (newuser == null) {
			if (other.newuser != null)
				return false;
		} else if (!newuser.equals(other.newuser))
			return false;
		if (subkey == null) {
			if (other.subkey != null)
				return false;
		} else if (!subkey.equals(other.subkey))
			return false;
		return true;
	}
	
}
