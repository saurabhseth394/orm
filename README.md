
# Clarivate Test

Postgres orm, migration setup in node js



## Documentation

[](https://linktodocumentation)
prerequisite : Assuming Node js installed on system
https://nodejs.org/en/download/prebuilt-installer


## Deployment

Create Directory Clarivate
```bash
  mkdir Clarivate
```
Go inside Clarivate dir
```bash
  Cd Clarivate
```
Clone Orm Repository
```bash
  git clone https://github.com/saurabhseth394/orm.git
```
orm dir coming inside Clarivate dir

Run Command

```bash
  cd orm
  npm i
```

Go to postgres pgAdmin
```bash
Create Database My-account manually due to security and permission reason.
```
Run DB table migration Command

```bash
  npm run migrate
  npx sequelize-cli db:seed:all
```
Users table will be create in postgres Admin.
Default seeders will importe few users into table.For verify tables and users by refresh pgAdmin

#Completed ORM Setup
