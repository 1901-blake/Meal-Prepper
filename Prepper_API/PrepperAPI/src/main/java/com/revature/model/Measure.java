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

@Table(name = "measure")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })

public class Measure {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	private String name;
	
	@OneToMany(mappedBy = "measure")
	@JsonIgnore
    private Set<RecipeIngredient> newmeasurement;
	
	public Measure() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Measure(int id, String name, Set<RecipeIngredient> newmeasurement) {
		super();
		this.id = id;
		this.name = name;
		this.newmeasurement = newmeasurement;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Set<RecipeIngredient> getNewmeasurement() {
		return newmeasurement;
	}

	public void setNewmeasurement(Set<RecipeIngredient> newmeasurement) {
		this.newmeasurement = newmeasurement;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((newmeasurement == null) ? 0 : newmeasurement.hashCode());
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
		Measure other = (Measure) obj;
		if (id != other.id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (newmeasurement == null) {
			if (other.newmeasurement != null)
				return false;
		} else if (!newmeasurement.equals(other.newmeasurement))
			return false;
		return true;
	}
	


}
