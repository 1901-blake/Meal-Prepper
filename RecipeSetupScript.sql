create table Recipe (id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(25), 
    description VARCHAR(50), 
    instructions VARCHAR(500))

create table Ingredient (id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(50))  

create table Measure (id SERIAL NOT NULL PRIMARY KEY, 
    name VARCHAR(30)) 
    
create table RecipeIngredient (recipe_id SERIAL NOT NULL, 
    ingredient_id INT NOT NULL, 
    measure_id INT, 
    amount INT, 
    CONSTRAINT fk_recipe FOREIGN KEY(recipe_id) REFERENCES Recipe(id), 
    CONSTRAINT fk_ingredient FOREIGN KEY(ingredient_id) REFERENCES Ingredient(id), 
    CONSTRAINT fk_measure FOREIGN KEY(measure_id) REFERENCES Measure(id)) 

commit
    
INSERT INTO Measure (name) VALUES('CUP'), ('TEASPOON'), ('TABLESPOON');

INSERT INTO Ingredient (name) VALUES('egg'), ('salt'), ('sugar'), ('chocolate'), ('vanilla extract'), ('flour');

INSERT INTO Recipe (name, description, instructions) VALUES('Boiled Egg', 'A single boiled egg', 'Add egg to cold water. Bring water to boil. Cook.');

INSERT INTO Recipe (name, description, instructions) VALUES('Chocolate Cake', 'Yummy cake', 'Add eggs, flour, chocolate to pan. Bake at 350 for 1 hour');

INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount) VALUES (1, 1, NULL, 1);

INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 1, NULL, 3);

INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 2, 2, 1);

INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 3, 1, 2);

INSERT INTO RecipeIngredient (recipe_id, ingredient_id, measure_id, amount)  VALUES (2, 4, 1, 1);

SELECT r.name AS "Recipe", 
    r.instructions, 
    ri.amount AS "Amount", 
    mu.name AS "Unit of Measure", 
    i.name AS "Ingredient" 
FROM recipe r 
JOIN RecipeIngredient ri on r.id = ri.recipe_id 
JOIN Ingredient i on i.id = ri.ingredient_id 
LEFT OUTER JOIN Measure mu on mu.id = measure_id;