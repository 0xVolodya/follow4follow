drop TABLE users;

create table if not EXISTS users
(id SERIAL PRIMARY KEY,
email: VARCHAR(100) UNIQUE NOT null,
password: VARCHAR(100) UNIQUE NOT null,
created_on DATE not null,
);

ALTER TABLE users
ADD github_link VARCHAR(100);

ALTER TABLE users
ADD github_following VARCHAR(100);
