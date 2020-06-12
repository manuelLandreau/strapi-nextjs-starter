# OUTDATED PROJECT !
practices changed, and I will not update it anymore

# Strapi + NextJS

From the [strapi-docker repository](https://github.com/strapi/strapi-docker), I add a 
[NextJS](https://nextjs.org) starter architecture, 
[SASS](https://github.com/zeit/next-plugins/tree/master/packages/next-sass), 
[Easy-peasy](https://github.com/ctrlplusb/easy-peasy) (Store managment with new [React HOOKS](https://reactjs.org/docs/hooks-intro.html)), 
[reactstrap](https://reactstrap.github.io/) (Bootstrap 4), ESlint (airbnb) and Axios...

## Quickstart (recommended)

1. `git clone https://github.com/strapi/strapi-docker && cd strapi-docker`
2. Run using `docker-compose up`
3. Then start the app (NextJS)

```
cd client
npm install (or) yarn
npm run dev (or) yarn dev
```

There's a minimalistic script to deploy it
```
sh ./deploy-app
```

You should the be able to access your Strapi installation at [localhost:1337](http://localhost:1337) and the front app on [localhost:3000](http://localhost:3000) in development mode

## Environment variables

- `APP_NAME` to override the `strapi-app` generated folder name (you should also update the volumes paths).
- `DATABASE_CLIENT` a database providers supported by Strapi: MongoDB, Postgres, MySQL, Sqlite3 and Redis.
- `DATABASE_HOST` database service name.
- `DATABASE_PORT` depends on your database client.
- `DATABASE_NAME` initializes a database with specific name (default strapi). When using MongoDB, you should also update the `MONGO_INITDB_DATABASE` environment in the db service.
- `DATABASE_USERNAME` set the username of the database connection.
- `DATABASE_PASSWORD` set the password of the database connection.
- `DATABASE_SRV` boolean for SRV.
- `DATABASE_SSL` boolean for SSL.
- `DATABASE_AUTHENTICATION_DATABASE` set the authentification.

PR are welcome.
