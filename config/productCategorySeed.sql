use  passport_demo;
ALTER TABLE product_category MODIFY COLUMN createdAt TIMESTAMP NOT NULL DEFAULT current_timestamp;
ALTER TABLE product_category MODIFY COLUMN updatedAt TIMESTAMP NOT NULL DEFAULT current_timestamp;
INSERT INTO product_category (category) VALUES ("Fresh vegetables");
INSERT INTO product_category (category) VALUES ("Fresh fruits");
INSERT INTO product_category (category) VALUES ("Frozen");
INSERT INTO product_category (category) VALUES ("Condiments/Sauces");
INSERT INTO product_category (category) VALUES ("Various groceries");
INSERT INTO product_category (category) VALUES ("Canned foods");
INSERT INTO product_category (category) VALUES ("Dairy");
INSERT INTO product_category (category) VALUES ("Cheese");
INSERT INTO product_category (category) VALUES ("Meat");
INSERT INTO product_category (category) VALUES ("Beverages");
INSERT INTO product_category (category) VALUES ("Baked goods");
INSERT INTO product_category (category) VALUES ("Baking");
INSERT INTO product_category (category) VALUES ("Snacks");
INSERT INTO product_category (category) VALUES ("Themed meals");
INSERT INTO product_category (category) VALUES ("Baby stuff");
INSERT INTO product_category (category) VALUES ("Pets");
INSERT INTO product_category (category) VALUES ("Personal care");
INSERT INTO product_category (category) VALUES ("Medicine");
INSERT INTO product_category (category) VALUES ("Kitchen");
INSERT INTO product_category (category) VALUES ("Cleaning products");
INSERT INTO product_category (category) VALUES ("Office supplies");
INSERT INTO product_category (category) VALUES ("Miscellanous");
INSERT INTO product_category (category) VALUES ("Carcinogens");