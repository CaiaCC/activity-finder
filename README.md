# ActivityGO — Final Project of Lighthouse Labs Web Development Bootcamp
### Main Contributors(order by last name): [Caia Chuang](https://github.com/CaiaCC), [Jenny Citherlet](https://github.com/JennyC2020), [Jeffrey Shao](https://github.com/97-Jeffrey)

## OverView
AcitivityGO was created to help users find activities within a selected area and budget. Users can select an activity from the list to view more details such as price, date and number of spots available. The listed activities can be added to their favorites for future reference or booked immediately.

ActivityGO allows users to do a quick search instead of having to scroll through many different websites to find activities that match both the desired location and their budget.

## Final product

Home page with welcoming text and dropdowns for search:
![Homepage](https://github.com/CaiaCC/activity-finder/blob/master/docs/home.png?raw=true)
Search results:
![Search result](https://github.com/CaiaCC/activity-finder/blob/master/docs/home-search.png?raw=true)
Detail page for individual activity to either book or add to favorites:
![Detail page](https://github.com/CaiaCC/activity-finder/blob/master/docs/detail.png?raw=true)
Confirmation page for booking:
![Confirmation page](https://github.com/CaiaCC/activity-finder/blob/master/docs/confirmation.png?raw=true)
Booking page to view list of booked activities:
![Booking page](https://github.com/CaiaCC/activity-finder/blob/master/docs/bookings.png?raw=true)
Favorite page to view list of activities added to favorites:
![Favorite page](https://github.com/CaiaCC/activity-finder/blob/master/docs/favorite.png?raw=true)

## Setup

This project needs **TWO** terminals to run FE and BE servers.

1.  Fork this repository, then clone your fork of repository.
2.  In root directory, run `bundle` to install the gem dependencies. Run `bin/rake db:setup` to create the databases. Run `bin/rails s` to start the BE server.
3.  In the other terminal, `cd` into `client`. Run `npm install`. Then run `npm start` to start the FE server.
4.  Go to `localhost:3000` in your browser, you will see the home page of ActivityGO.

## Tech Stack

- Rails
- React
- React router
- React bootstrap
- Axios
- PostgreSQL

