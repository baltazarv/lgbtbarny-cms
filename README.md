# Strapi application

Install Strapi globally: `npm install strapi@alpha -g`

# Set up (& clean up) PostgreSQL database

* Drop & create database:
  * `dropdb strapi`
  * `createdb strapi`
* Populate database: `yarn develop`
* Create admin account: `http://localhost:1337/admin`
* Create user authorized user:
  * POST `http://localhost:1337/auth/local/register`
  * payload: `{"username": "NAME", "email": "EMAIL", "password": "PWD"}`
* Add credentials to `/config/keys.js`
* Temporarily give permissions to Authenticated users, `http://localhost:1337/admin/plugins/users-permissions/roles/edit/1`, to `Product.create` and `Product.seed`.
* Seed database: `/data/seed.js`
