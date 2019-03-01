package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Table(name = "ratings")
@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Ratings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")//creating a primary key	
	private int id;
	
    @Column(name = "user_id")
    private int user;
	
	@Column(name = "Recipe_id")
    private int recipe;
	
	private Integer rating;

	public Ratings() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ratings(int id, int user, int recipe, Integer rating) {
		super();
		this.id = id;
		this.user = user;
		this.recipe = recipe;
		this.rating = rating;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUser() {
		return user;
	}

	public void setUser(int user) {
		this.user = user;
	}

	public int getRecipe() {
		return recipe;
	}

	public void setRecipe(int recipe) {
		this.recipe = recipe;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		result = prime * result + ((rating == null) ? 0 : rating.hashCode());
		result = prime * result + recipe;
		result = prime * result + user;
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
		Ratings other = (Ratings) obj;
		if (id != other.id)
			return false;
		if (rating == null) {
			if (other.rating != null)
				return false;
		} else if (!rating.equals(other.rating))
			return false;
		if (recipe != other.recipe)
			return false;
		if (user != other.user)
			return false;
		return true;
	}

}
