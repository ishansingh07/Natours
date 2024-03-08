<h1 align="center">
  <br>
  <img src="https://github.com/lgope/Natours/blob/master/public/img/logo-green-round.png" alt="Natours" width="200">
  <br>
  Natours
  <br>
</h1>

<h4 align="center">An awesome tour booking site built on top of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.</h4>

 <p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#demonstration">Demonstration</a> •
  <a href="#build-with">Build With</a> •
  <a href="#acknowledgement">Acknowledgement</a>
</p>

## Key Features 

- User Management
    - **Authentication**: Users can sign up, log in, log out, update profile information, and reset passwords.
    - **Authorization**: A role-based system exists with four user types: Regular User, Admin, Lead Guide, and Guide (default upon signup is Regular User).
- User Profile
   - Users can manage their profile information, including username, photo, email, password, and potentially other details.
- Tours
    - Management:
        - Admins and Lead Guides can create and update tours.
        - All users can view tours.
        Only Admins can delete tours.
    Booking
        - Only Regular Users can book tours (implying payment).
        - Booking limitations:
            - Users cannot book the same tour twice.
            - Admins/Lead Guides cannot create duplicate bookings for the same user.
- Bookings
    - Management
        - Regular Users can view their booked tours.
        - Admins/Lead Guides have broader functionalities:
            - Create bookings manually (without payment).
            - Edit and delete any booking.
- Reviews
    - Posting and Viewing:
       - Only Regular Users can write reviews for tours they've booked.
        - All users can view reviews for each tour.
    - Management:
        - Regular Users can edit and delete their own reviews.
        - Admins can delete any review.
- Credit Card Payment
    - The document mentions credit card payment integration for tour bookings (likely by Regular Users). Specific details are not provided.

## Demonstration 

#### Home Page :

![natoursHomePageonline-video-cutt](https://user-images.githubusercontent.com/58518192/72606801-7ebe0680-3949-11ea-8e88-613f022a64e5.gif)

#### Tour Details :

![tourOverviewonline-video-cutterc](https://user-images.githubusercontent.com/58518192/72606859-a0b78900-3949-11ea-8f0d-ef44c789957b.gif)

#### Payment Process :

![paymentprocess-1-ycnhrceamp4-7fW](https://user-images.githubusercontent.com/58518192/72606973-d9eff900-3949-11ea-9a2e-f84a6581bef3.gif)

#### Booked Tours :

![rsz_bookedtours](https://user-images.githubusercontent.com/58518192/72607747-6a7b0900-394b-11ea-8b9f-5330531ca2eb.png)

#### User Profile :

![rsz_userprofile](https://user-images.githubusercontent.com/58518192/72607635-44edff80-394b-11ea-8943-64c48f6f19aa.png)

#### Admin Profile :

![rsz_adminprofile](https://user-images.githubusercontent.com/58518192/72607648-4d463a80-394b-11ea-972f-a73160cfaa5b.png)

## Build With 

- [NodeJS](https://nodejs.org/en/) - JS runtime environment
- [Express](http://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [Pug](https://pugjs.org/api/getting-started.html) - High performance template engine
- [JSON Web Token](https://jwt.io/) - Security token
- [ParcelJS](https://parceljs.org/) - Blazing fast, zero configuration web application bundler
- [Stripe](https://stripe.com/) - Online payment API and Making payments on the app.
- [Postman](https://www.getpostman.com/) - API testing
- [Mailtrap](https://mailtrap.io/) & [Sendgrid](https://sendgrid.com/) - Email delivery platform
- [Heroku](https://www.heroku.com/) - Cloud platform
- [Mapbox](https://www.mapbox.com/) - Displaying the different locations of each tour.

## Acknowledgement

- This project is part of the online course I've taken at Udemy. Thanks to Jonas Schmedtmann for creating this awesome course! Link to the course: [Node.js, Express, MongoDB & More: The Complete Bootcamp 2024](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
- Credit to https://github.com/lgope/Natours for the photos and videos used.
