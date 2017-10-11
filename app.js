const express = require('express');
const Sequelize = require('sequelize');

const database = 'ddd7ca892a4sqt';
const user = 'xscdouuzdvbmhb';
const password = '5ad72a268b2ab5f8b3be564acbbfcd64faa3009984e99783a574e0be8d9a5789';
const host = 'ec2-23-23-159-84.compute-1.amazonaws.com';

const port = 5432;
const sequelize = new Sequelize(database, user, password, {
	host,
	port,
	dialect: 'postgres',
	dialectOptions: {
		ssl: true,
		sslfactory: 'org.postgresql.ssl.NonValidatingFactory'
	},
	pool: {
		max: 20,
		min: 0,
		idle: 10000
	},
	logging: true
});

// check the connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


 // create table 'users'
const User = sequelize.define('user', {
	firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
  	type: Sequelize.STRING
  },
  cash: {
		type: Sequelize.INTEGER,
		allowNull: false,
		defaultValue: 150,
		validate: {
			min: 0
		}
	}
});

// Создает записи в таблице
// User.sync()
//   .then(() => { 
//   return User.create({
//     firstName: 'John3',
//     lastName: 'Hancock3',
//     email: 'bbbb3@mail.ru'
//   });
// });

// выводит firstName 1го юзера 
// User.findOne().then(user => {
//   console.log(user.get('firstName'));
// });

User.findById(1)
.then(user => {
	console.log(user);
})