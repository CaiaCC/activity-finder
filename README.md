# Activity Finder:

This app is for people to search available activities nearby by typing in their cities and ideal budgets. Users are able to book/delete activites from searched activities or save activites for later booking(s).

## Stacks:

This project uses Ruby on Rails as back-end, and React as front-end.

The back-ends are stored in `app` folder, which has models, serializers, controllers for different resources. 

The database is stored in `db` folder, which contains migrate files, schema file, and seeds file.

The front-ends are located in `client` folder, which contains component and css files.

The front-end of this app has `proxy` set to `localhost:3001` as well as dependencies in the `package.json` file. For back-end, the dependencies are stored in `Gemfile`.

## Final products:

Home page with welcoming text and dropdowns for search:
![home](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/home.png?raw=true)

Searched activities lists given city and budgets:
![home-search](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/home-search.png?raw=true)

Detail pages for individual activity to either book or add to favorites:
![detail](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/detail.png?raw=true)

Confirmation page for booking:
![confirmation](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/confirmation.png?raw=true)

Booking page: users can add activities or delete activities from this page:
![booking](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/bookings.png?raw=true)

Favorite page: users can go to detail page for individual acitvity or book each activity from this page:
![favorite](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/favorite.png?raw=true)


## Start the project:

 Fork the repo, so you get your own copy of it. Then clone the new repo to your local machine.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Environment variables should be created in file called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

In the browser, you'll see the home page of the app with a big background photo of sky view and one hiker on the right.

## Dependencies:

To install dependencies for Ruby on Rails, run `bundle install`.

To install dependencies for React,
 run `npm install`.

dependencies:

* Ruby 2.6.2 +
* Rails 5.2.2.1 +
* React
* Axois
* React Router
* React Bootstrap
* Active_Model_serializer


## Collaborators:

* Jeffrey Shao: https://github.com/97-Jeffrey

* Caia Chuang: https://github.com/CaiaCC

* Jenny Citherlet: https://github.com/JennyC2020


