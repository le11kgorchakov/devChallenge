# inMotionNow Developer Challenge

## Why?

The purpose of this is to showcase your skills and interests. We want to see what you can do as a developer, but we also want to see what you *enjoy* doing as a developer.

Do you love structuring an air tight API?

Do you lose sleep over css that isn't pixel perfect?

Do you need to squeeze the most performance from your database?

Does user experience mean more to you than winning the lottery?

Does the thought of an application with 0% test coverage make you throw up a little?

Do you prefer adding a package from `npm` or writing something from scratch?

## What?

Your assignment is to create a task management app. The exact requirement will be described in more detail below.

## How Much?

A whole application? We certainly aren't expecting a completed application with all the bells and whistles. So you should be prepared to talk about your project, along with discussing the choices you made and the things you wished you could have done.

# Let's Go!

## Minimum Requirements

As a user of this app I should be able to
- See the list of tasks
- Create / Update / Delete a user
- Create / Update / Delete a task
- Assign a task to a user
- Mark a task as complete

## Beyond the Minimum

Be creative. Add whatever you feel showcases what you're all about.

## Technical Requirements - IMPORTANT!!!!

- Use `React`. The `app` project must use `React`. Nothing against any of the other frameworks, but `React` is what we use.
- Use `Typescript`. No straight javascript please - we love our typings.

You have some flexibility with the API/Database

- A "fake" in code database / api in the frontend `app` project
- The included `dotnet-api` and `mssqlserver` projects
- The included `express-api` and `mssqlserver` projects
- Something else? Just make sure it doesn't take an act of congress to clone the repo and run it

## Getting Started

This repo was created specifically for you. You can do whatever you want with it. 

### Tools
- node: >= v12
- yarn: >= v1.22
- docker: if you plan on running the included mssql server database
- .NET SDK: >= 5.0 if you plan on running the .NET api

### The Project Folders
The `app` project is a no frills `React` app.

```
cd app

yarn

yarn start
```
<br />

The `dotnet-api` project is a basic dotnet `webapi` starter that connects to the included mssql server database.

```
cd dotnet-api

dotnet build
dotnet run
```
<br />

The `express-api` project is a basic `express` api starter that connects to the included mssql server database.

```
cd express-api

yarn

yarn start
```
<br />

The `mssqlserver` project contains a dockerized `SQLServer` image with some initial data - feel free to update the tables and data in `restore-database.sql` as needed.

```
cd mssqlserver

yarn build:db
yarn start:db
```
Once the container is started you should be able to connect to it using the client or api of your choice.

```
Server: localhost
Username: sa
Password: inmotionnow123!
Database: DevChallengeDB
Port: 1433
```
