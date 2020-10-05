# Activity Finder:

This app is for people to search available activities nearby by typing in their cities and ideal budgets. User is able to add/delete book activites from searched activities or save activites for later booking.

## Stack:

This project uses Ruby on Rails as back-end, and React as front-end for rendering.

The back-ends are stored in app folder, which has models, serializers, controllers for different resources. 

The database is stored in db folder, which contains migrate files, schema files, and seeds files.

The front-ends are located in client folder, which contains component  and css files.

The front-end of this app has `proxy` set to `localhost:3001` in the `package.json` file. For back-end, the dependencies are stored in `Gemfile`.

## Final products:

Home page with welcoming text and dropdowns for search:
![home]()

Searched activities given city and budgets:
![home-search](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/home-search.png?raw=true)

Detail pages for individual activity:
![detail](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/detail.png?raw=true)

Confirmation page for either booking or adding to favorite list:
![confirmation](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/confirmation.png?raw=true)

Booking page: user can add activities or delete activities from this page:
![booking](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/bookings.png?raw=true)

Favorite page: user can go to detail page of each acitvity or book each activity from this page:
![favorite](https://github.com/97-Jeffrey/activity-finder/blob/readme-update/docs/favorite.png?raw=true)


## Using the boilerplate

First, fork this boilerplate so you get your own copy of it. Once you have done that, you can clone your new repo to your machine, and get started.

You need **TWO** terminals for this.

In one terminal, run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s` to run the server.

In the other terminal, `cd` into `client`. Run `npm install`. Rename the `.env.example` file to be called `.env`. Then run `npm start` and go to `localhost:3000` in your browser.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

## Next steps

From here, you can start working on your project!

On the Rails side, you may make new `resources` routes in your `routes.rb` file, e.g. :

```rb
namespace :api do
  resources :dogs # to generate GET /api/dogs, POST /api/dogs, etc...
end
```

Then you can make your various controllers, models, migrations, etc. as you need! The one funky thing is that instead of rendering an HTML view you'll be rendering JSON. [You can return anything from a Rails controller as JSON like this.](https://guides.rubyonrails.org/v5.2/layouts_and_rendering.html#rendering-json) See the example in my "tests_controller".

On the React side, the important bit is that you make you make your AJAXy HTTP requests using something like `axios` or `superagent`. I've set this up to use `axios` already. Check the React code to see an example request being made on-click to the Rails server! You can make your HTTP requests to `/api/anything/you/want`, as long as the route exists on your Rails app.

**NOTE:** I recommend that you namespace all your routes under `api` on the Rails side! Look at how I've done that in the `routes.rb` file, and also how the `tests_controller` is written as:

```rb
class Api::TestsController < ApplicationController
```

and it lives in the `api` folder! Put all your controllers in there!

## Deployment to Heroku

This boilerplate is _almost_ all set up to deal with deploying to Heroku. If you have the Heroku CLI tools installed you can run `heroku create` to create the Heroku project.

Then we must run two commands to tell Heroku to first build our React app, and _then_ build the Rails app.

1. `heroku buildpacks:add heroku/nodejs --index 1`
2. `heroku buildpacks:add heroku/ruby --index 2`

Once you've done that, you can run `git push heroku master` to deploy your project any time you want! Note, however, that deploying to Heroku can be a _little_ slow since Heroku needs to build your React app. Just give it some time.

Once it's deployed, you can run the following commands to manage your app:

- `heroku run rake db:schema:load` to set up your database the first time
- `heroku run rake db:migrate` for any additional migrations
- `heroku run rake db:seed` for seeds
- `heroku run rake db:rollback` to rollback a migration

There are other commands, but these are good to get you started!

To make your app work properly with React Router (if you end up using it) on Heroku, I've added a special route to the `routes.rb` file (`get '*path' ... `).

## Contact

Please contact me at `nima@lighthouselabs.com` if you have any questions or requests, or post an issue to this repo.
