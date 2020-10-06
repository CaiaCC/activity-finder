# Activity Finder:

AcitivityGO was created to help users find activities within a selected area and budget. Users can select an activity from the list to view more details such as price, date and number of spots available. The listed activities can be added to their favorites for future reference or booked immediately.

ActivityGO allows users to do a quick search instead of having to scroll through many different websites to find activities that match both the desired location and their budget.


## Stacks:

* This project uses `Ruby on Rails` as back-end, and `React` as front-end.

* The back-ends are stored in `app` folder, which has models, serializers, controllers for different resources. 

* The database is stored in `db` folder, which contains migrate files, schema file, and seeds file.

* The front-ends are located in `client` folder, which contains component and css files.

* The front-end of this app has `proxy` set to `localhost:3001` as well as dependencies in the `package.json` file. For back-end, the dependencies are stored in `Gemfile`.

## Final products:

**Home page with welcoming text and dropdowns for search:**

![Homepage](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/home.png?raw=true)

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


## Setup

You need **TWO** terminals for this project.

1.  Fork & Clone

2.  In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases(called rails_project_development by default). Run `bin/rails s` to run the server.

3.  In the other terminal, `cd` into `client`. Run `npm install`. Environment variables should be created in file called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

4.  In the browser, you'll see the home page of the app with a big background photo of sky view and one hiker on the right.

## Dependencies:

* Ruby 2.6.2 +
* Rails 5.2.2.1 +
* React
* Axiox
* React Router
* React Bootstrap
* Active_Model_serializer

To install dependencies for Ruby on Rails, run `bundle install`.

To install dependencies for React, run `npm install`.


## Collaborators:

* Jeffrey Shao: https://github.com/97-Jeffrey

* Caia Chuang: https://github.com/CaiaCC

* Jenny Citherlet: https://github.com/JennyC2020


