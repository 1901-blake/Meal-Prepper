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

@Table(name = "recipe")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Recipe {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")//creating a primary key	
	private int id;

	//columns in Recipe table
	private String name;
	private String description;
	private String instructions;
	
	@OneToMany(mappedBy = "recipe")
	@JsonIgnore
    private Set<RecipeIngredient> newrecipe;
	
/*	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "recipeingredient", 
		joinColumns = @JoinColumn(name = "recipe_id", referencedColumnName = "id"), 
		inverseJoinColumns = @JoinColumn(name = "measure_id", referencedColumnName = "id"))
	private Set<Measure> measurement = new HashSet<>();

	
	//doesn't match up with measurement
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "recipeingredient", 
		joinColumns = @JoinColumn(name = "recipe_id", referencedColumnName = "id"), 
		inverseJoinColumns = @JoinColumn(name = "ingredient_id", referencedColumnName = "id"))
	private Set<Ingredient> ingredient = new HashSet<>();
	*/
	
	public Recipe() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Recipe(int id, String name, String description, String instructions) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.instructions = instructions;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getInstructions() {
		return instructions;
	}

	public void setInstructions(String instructions) {
		this.instructions = instructions;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + id;
		result = prime * result + ((instructions == null) ? 0 : instructions.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Recipe other = (Recipe) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id != other.id)
			return false;
		if (instructions == null) {
			if (other.instructions != null)
				return false;
		} else if (!instructions.equals(other.instructions))
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

	
}
