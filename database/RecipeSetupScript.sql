rollback;
begin transaction;
drop table if exists RecipeIngredient;
drop table if exists Ratings;
drop table if exists Recipe;
drop table if exists Ingredient;
drop table if exists Measure;
drop table if exists Users;


create table Recipe (
	id SERIAL NOT NULL PRIMARY KEY, 
    "name" text, 
    description text, 
    instructions text,
   	avg_rating int,
   	num_ratings int);

create table Ingredient (
	id SERIAL NOT NULL PRIMARY KEY, 
    "name" text);  

create table Measure (
	id SERIAL NOT NULL PRIMARY KEY, 
    "name" text);  

create table Users (
	id SERIAL NOT NULL PRIMARY KEY, 
    username text,
   	firstname text,
   	lastname text,
   	email text,
   	phone text); 
   
create table Ratings (
	user_id int not null,
	recipe_id int not null,
	rating int not null,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES Users(id),
	CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES Recipe(id)
   	);
   
create table RecipeIngredient (
	recipe_id SERIAL NOT NULL, 
    ingredient_id INT NOT NULL, 
    measure_id INT, 
    amount INT, 
    CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES Recipe(id), 
    CONSTRAINT fk_ingredient FOREIGN KEY(ingredient_id) REFERENCES Ingredient(id), 
    CONSTRAINT fk_measure FOREIGN KEY(measure_id) REFERENCES Measure(id)); 

commit;
    
INSERT INTO Measure ("name") VALUES('CUP'), ('TEASPOON'), ('TABLESPOON');
INSERT INTO Ingredient ("name") VALUES('egg'), ('salt'), ('sugar'), ('chocolate'), ('vanilla extract'), ('flour');
INSERT INTO Recipe ("name", description, instructions, avg_rating, num_ratings) VALUES('Boiled Egg', 'A single boiled egg', 'Add egg to cold water. Bring water to boil. Cook.', NULL, NULL);
INSERT INTO Recipe ("name", description, instructions, avg_rating, num_ratings) VALUES('Chocolate Cake', 'Yummy cake', 'Add eggs, flour, chocolate to pan. Bake at 350 for 1 hour', NULL, NULL);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount) VALUES (1, 1, NULL, 1);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 1, NULL, 3);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 2, 2, 1);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 3, 1, 2);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 4, 1, 1);

SELECT r."name" AS "Recipe", 
    r.instructions, 
    ri.amount AS "Amount", 
    mu."name" AS "Unit of Measure", 
    i."name" AS "Ingredient",
    r.avg_rating as "Rating",
    r.num_ratings as "Number of Ratings"
FROM recipe r 
JOIN RecipeIngredient ri on r.id = ri.recipe_id 
JOIN Ingredient i on i.id = ri.ingredient_id 
LEFT OUTER JOIN Measure mu on mu.id = measure_id;