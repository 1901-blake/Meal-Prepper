rollback;
begin transaction;
--drop table if exists RecipeIngredient;
--drop table if exists Recipe;
--drop table if exists Ingredient;
--drop table if exists Measure;
--drop table if exists Users;
--drop table if exists Ratings;

create table Users (
	id serial primary key,
	username text unique,
	first_name text,
	last_name text,
	email text check(email like '%___@___%.__%')
);

create table Recipe (
	id serial primary key, 
    "name" text, 
    description text, 
    instructions text
);

create table Ratings (
	user_id int not null references users(id) on delete restrict,
	recipe_id int not null references recipe(id) on delete restrict,
	rating int not null check(rating >= 1 and rating <= 5)
);

create table Ingredient (
	id serial primary key, 
    "name" text
);  

create table Measure (
	id serial primary key,
    "name" text
); 
    
create table RecipeIngredient (
	recipe_id int not null references recipe(id) on delete restrict,
    ingredient_id int not null references ingredient(id) on delete restrict,
    measure_id int not null references measure(id) on delete restrict,
    amount numeric not null
);

create view full_recipe as
SELECT
	r.id,
	r."name",
	r.description,
    r.instructions, 
    ri.amount, 
    m."name" as measure,
    i."name" as ingredient 
FROM recipe r 
JOIN RecipeIngredient ri on r.id = ri.recipe_id 
JOIN Ingredient i on i.id = ri.ingredient_id 
JOIN Measure m on m.id = measure_id
order by r.id;

create view recipe_rating as 
select
	r.id,
	r.name,
	r.description,
	r.instructions,
	avg(ra.rating) as avg_rating,
	count(ra.rating) as num_rating
from recipe r
left join ratings ra on r.id = ra.recipe_id
group by r.id
order by r.id;

commit;

--Boiled Egg and Chocolate Cake
INSERT INTO Measure ("name") values ('cup'), ('teaspoon'), ('tablespoon'), ('each'), ('ounce'), ('milliliter'), ('gram'), ('pint'), ('quart'), ('liter'), ('gallon');
INSERT INTO Ingredient ("name") values ('egg'), ('salt'), ('sugar'), ('chocolate'), ('vanilla extract'), ('plain / all-purpose flour');
INSERT INTO Recipe ("name", description, instructions) values ('Boiled Egg', 'A single boiled egg', 'Add egg to cold water. Bring water to boil. Cook for desired time, 10 minutes for a hard boiled egg.\n
Immediately put egg in ice-water bath to stop cooking and shock the shell for easier peeling.');
INSERT INTO Recipe ("name", description, instructions) values ('Chocolate Cake', 'Cake', 'Add eggs, flour, chocolate to pan. Bake at 350 for 1 hour');
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount) values (1, 1, 4, 1);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  values (2, 1, 4, 3);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  values (2, 2, 2, 1);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  values (2, 3, 1, 2);
INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  values (2, 4, 1, 1);

--Chicken Noonle Casserole
insert into Ingredient ("name") values ('egg noodles'), ('chicken broth'), ('cream of celery soup'), ('cream of chicken soup'), ('stuffing mix'), ('salted butter'), ('chicken breasts');
insert into measure ("name") values ('package'), ('can'), ('stick');
insert into recipe ("name", description, instructions) values ('Chicken Noodle Casserole', 'Casserole', 'Alternate layers of noodles and shredded chicken.  Pour 1 cup of the broth over layers.\n
Combine rest of broth with the condensed soup and pour over layers.\n
Spread stuffing mix on top.  Dice butter into small pieces and sprinkle over stuffing mix.\n
Bake at 350℉ for 30 minutes.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 7, 5, 8);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 8, 1, 1.5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 9, 13, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 10, 13, 2);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 11, 12, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 12, 14, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (3, 13, 4, 3);

--Baked Spaghetti
insert into Ingredient ("name") values ('ground beef'), ('onion'), ('spaghetti'), ('spaghetti sauce'), ('garlic'), ('oregano'), ('shredded sharp cheddar cheese'), ('shredded mozzarella cheese'), ('milk'), ('mushrooms');
insert into measure ("name") values ('pound');
insert into recipe ("name", description, instructions) values ('Baked Spaghetti', 'Casserole', 'Cook Spaghetti according to package directions and drain.\n
Saute meat with diced onion, breaking up the meat into small pieces and cooking until brown.  Drain.  Mix in spaghetti sauce.\n
Add garlic and oregano and combine with spaghetti.  Add most of cheese, milk, and mushrooms.  Mix well and put into a greased 13" x 9" pan.\n
Bake at 350℉ for about 30 minutes or until bubbly and beginning to brown around edges.\n
Sprinkle rest of cheese on top.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 14, 15, 1.5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 15, 4, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 16, 5, 8);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 17, 5, 28);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 18, 2, .5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 19, 2, .5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 20, 5, 8);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 21, 5, 8);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 22, 1, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (4, 23, 5, 4);

--Pecan Pie
insert into Ingredient ("name") values ('light brown sugar'), ('dark brown sugar'), ('water'), ('pie shell'), ('pecan halves');
insert into recipe ("name", description, instructions) values ('Pecan Pie', 'Pie', 'Toast pecans.  Place in pie shell.\n
Combine sugar and water in saucepan.  Cook and stir until sugar dissolves.  Bring to a boil and cook 3 minutes.  Gradually add hot syrup to eggs, stirring constantly.  Mix in butter and vanilla.\n
Pour over pecans in pie shell.  Pecan will rise to the surface during baking.\n
Bake at 350℉ for about 1 hour or until set.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 24, 15, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 26, 1, .75);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 1, 4, 4);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 12, 1, .25);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 5, 2, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 27, 4, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (5, 28, 1, 1);

--Pan-seared Tilapia
insert into Ingredient ("name") values ('tilapia fillets'), ('black pepper'), ('olive oil'), ('unsalted butter');
insert into measure ("name") values ('to taste');
insert into recipe ("name", description, instructions) values ('Pan-seared Tilapia', 'Fish', '1. Rinse tilapia fillets in cold water and pat dry with paper towels.  Season both sides of each fillet with salt and pepper.  Place the flour in a shallow dish; gently press each fillet into the flour to coat.  Shake off the excess flour.\n
2. Heat the olive oil in a skillet over medium-high heat; cook the tilapia in the hot oil until the fish flakes easily with a fork, about 4 minutes per side.  Brush melted butter onto the tilapia in the last minute before removing from the skillet.  Serve immediately.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 29, 4, 4);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 2, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 30, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 6, 1, .5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 31, 3, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (6, 32, 3, 2);

--Easy, Creamy One-Pot Salmon Chowder
insert into Ingredient ("name") values ('salt pork or bacon'), ('celery'), ('clam juice'), ('russet potatoes'), ('bay leaf'), ('salmon'), ('hot sauce'), ('crackers'), ('parsley'), ('dill'), ('chives');
insert into recipe ("name", description, instructions) values ('Easy, Creamy One-Pot Salmon Chowder', 'Soup', '1. Cut salt pork or bacon into 1/2-inch pieces.  Combine with water in a heavy-bottomed stock pot or Dutch oven over medium heat and cook, stirring occasionally, until water has evaporated and pork has begun to brown and crisp in spots, about 8 minutes.  Add finely chopped onions and celery.  Season gently with salt and pepper and continue to cook, stirring occasionally, until onions are softened but not browned, about 4 minutes longer.  Add flour and cook, stirring, until no pockets of raw flour remain.  Stir in clam juice, followed by milk.  Add potatoes and bay leaf and bring to a simmer.\n
2. Simmer chowder, stirring occasionally, until potatoes are fully tender, about 15 minutes.  Stir in salmon (can also use Cod or Hallibut), cut into 3/4-inch chunks, and simmer just until cooked through, about 3 minutes.  Season to taste with salt and pepper.\n
3. Serve immediately, garnished with your choice of minced fresh herbs (such as parsley, dill, or chives), hot sauce, and crackers.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 33, 15, .5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 26, 3, 2);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 15, 5, 8);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 34, 5, 6);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 2, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 30, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 6, 3, 2);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 35, 1, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 22, 9, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 36, 15, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 37, 4, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 38, 15, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 39, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 40, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 41, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 42, 16, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (7, 43, 16, 1);

--Meat Loaf
insert into Ingredient ("name") values ('oats'), ('tomato juice');
insert into recipe ("name", description, instructions) values ('Meat Loaf', 'Loaf', 'Combine all ingredients.  Pack firmly into an ungreased loaf pan.  Bake at 350℉ for about 1 hour and 15 minutes.  Let stand for 5 minutes before serving.');
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 14, 15, 1.5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 44, 1, .75);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 15, 1, .25);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 2, 2, 1.5);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 30, 2, .25);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 45, 1, 1);
insert into recipeingredient (recipe_id, ingredient_id, measure_id, amount) values (8, 1, 4, 1);


select * from full_recipe;
select * from recipe_rating;