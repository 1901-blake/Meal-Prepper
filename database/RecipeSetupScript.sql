rollback;
begin transaction;
drop table if exists recipeingredient;
drop table if exists ratings;

drop table if exists recipes;
drop table if exists ingredients;
drop table if exists measurements;
/*drop table if exists users;*/


create table recipes (
	recipe_id SERIAL NOT NULL PRIMARY KEY, 
    "name" text, 
    description text, 
    instructions text);
   	/*avg_rating int,
   	num_ratings int)*/

create table ingredients (
	ingredient_id SERIAL NOT NULL PRIMARY KEY, 
    "name" text);  

create table measurements (
	measure_id SERIAL NOT NULL PRIMARY KEY, 
    "name" text);  

create table users (
	user_id SERIAL NOT NULL PRIMARY KEY, 
    username text/*,
   	firstname text,
   	lastname text,
   	email text,
   	phone text*/); 
   
/*create table ratings (
	user_id int not null,
	recipe_id int not null,
	rating int not null,
    CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id),
	CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES recipes(recipe_id)
   	);*/
   
create table recipeingredient (
	recipeingredient_id SERIAL NOT NULL, 
    ingredient_id INT NOT NULL, 
    measure_id INT, 
    amount INT, 
    CONSTRAINT fk_recipe FOREIGN KEY(recipeingredient_id) REFERENCES recipes(recipe_id), 
    CONSTRAINT fk_ingredient FOREIGN KEY(ingredient_id) REFERENCES ingredients(ingredient_id), 
    CONSTRAINT fk_measure FOREIGN KEY(measure_id) REFERENCES measurements(measure_id)); 

commit;
    
INSERT INTO measurements ("name") VALUES('CUP'), ('TEASPOON'), ('TABLESPOON');
INSERT INTO ingredients ("name") VALUES('egg'), ('salt'), ('sugar'), ('chocolate'), ('vanilla extract'), ('flour');
INSERT INTO recipes ("name", description, instructions) VALUES('Boiled Egg', 'A single boiled egg', 'Add egg to cold water. Bring water to boil. Cook.');
INSERT INTO recipes ("name", description, instructions) VALUES('Chocolate Cake', 'Yummy cake', 'Add eggs, flour, chocolate to pan. Bake at 350 for 1 hour');
INSERT INTO recipeingredient (recipeingredient_id, ingredient_id, measure_id, amount) VALUES (1, 1, NULL, 1);
INSERT INTO recipeingredient (recipeingredient_id, ingredient_id, measure_id, amount)  VALUES (2, 1, NULL, 3);
INSERT INTO recipeingredient (recipeingredient_id, ingredient_id, measure_id, amount)  VALUES (2, 2, 2, 1);
INSERT INTO recipeingredient (recipeingredient_id, ingredient_id, measure_id, amount)  VALUES (2, 3, 1, 2);
INSERT INTO recipeingredient (recipeingredient_id, ingredient_id, measure_id, amount)  VALUES (2, 4, 1, 1);

SELECT r."name" AS "Recipe", 
    r.instructions, 
    ri.amount AS "Amount", 
    mu."name" AS "Unit of Measure", 
    i."name" AS "Ingredient"
   /*r.avg_rating as "Rating",
    r.num_ratings as "Number of Ratings"*/
FROM recipes r
JOIN recipeingredient ri on ri.recipeingredient_id = r.recipe_id 
JOIN ingredients i on i.ingredient_id = ri.ingredient_id 
LEFT OUTER JOIN measurements mu on mu.measure_id = mu.measure_id;

/*select * from Recipe*/