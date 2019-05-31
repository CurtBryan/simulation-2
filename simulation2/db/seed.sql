create table homes (
home_id serial primary key, 
name varchar(30),
address varchar(100),
city varchar(100),
state varchar(2),
zipcode integer, 
mortage decimal,
rent decimal,
user_id integer
);

create table houser_users (
user_id serial primary key,
username varchar (30),
password varchar (30)   
); 

alter table homes 
add column image text;

alter table houser_users
drop column password;

insert into homes (name, address, city, state, zipcode, mortage, rent, user_id, image)
values ('new home for sale!', '123 e. something street', 'somewhere', 'SW', 85555, 300000, 2400, 1, 'https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-with-green-grass-and-landscaped-yard-picture-id856794608?k=6&m=856794608&s=612x612&w=0&h=Zj19xfoLCw35hQVUj8AJb2KxKiV6lnUXSBORrCvLouA=')