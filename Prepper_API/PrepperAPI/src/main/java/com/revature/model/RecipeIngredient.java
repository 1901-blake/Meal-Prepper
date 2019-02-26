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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Table(name = "recipeingredient")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class RecipeIngredient {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "recipe_id")
	private int recipe;
	
	@Column(name = "measure_id")
	private int measurements;
	
	@Column(name = "ingredient_id")
	private int ingredients;

	private int amount;

	public RecipeIngredient() {
		super();
		// TODO Auto-generated constructor stub
	}

	public RecipeIngredient(int recipe, int measurements, int ingredients, int amount) {
		super();
		this.recipe = recipe;
		this.measurements = measurements;
		this.ingredients = ingredients;
		this.amount = amount;
	}

	public int getRecipe() {
		return recipe;
	}

	public void setRecipe(int recipe) {
		this.recipe = recipe;
	}

	public int getMeasurements() {
		return measurements;
	}

	public void setMeasurements(int measurements) {
		this.measurements = measurements;
	}

	public int getIngredients() {
		return ingredients;
	}

	public void setIngredients(int ingredients) {
		this.ingredients = ingredients;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + ingredients;
		result = prime * result + measurements;
		result = prime * result + recipe;
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
		RecipeIngredient other = (RecipeIngredient) obj;
		if (amount != other.amount)
			return false;
		if (ingredients != other.ingredients)
			return false;
		if (measurements != other.measurements)
			return false;
		if (recipe != other.recipe)
			return false;
		return true;
	}


}
