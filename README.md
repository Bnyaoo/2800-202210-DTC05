# Connectify - DTC-05

## Technologies
Technologies used for this project:
* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap
* Node
* MongoDB
* Heroku

Middleware used for this project:
* Mongoose
* Ejs
* Axios
* Body-parser
* Express
* Passport-local-mongoose

## Project Overview
Our app, Connectify, will help students who were unable to acquire co-op connect with employers
in the field and help them acquire industry experience, build connections and get paid.

We wanted to help students with their debt problems, and so we investigated why students were unable
to find a job after graduation. One of the most glaring issues is getting stuck in the cycle of
“need experience for a job”, and “need a job for experience”.

## One Sentence Pitch:
Our project, Connectify, is developing a web application to help students who couldn’t get into
coop get work experience by connecting them to employers.

## Content
Content of the project folder:

```
 Top level of project folder: 
├── controllers                         # Functionality behind user actions
├── models		                        # Creating schemas in our database
├── node_modules                        # Project dependencies
├── public		                        # Contains all source code and images
├── routes		                        # Defines all routes our app will use
├── services		                    # Sends the correct pages for the requested route
├── util		                        # Creates a connection between our database and our app
├── views		                        # Contains main ejs files
├── .gitignore                          # Git ignore file
├── app.js		                        # Point of insertion / server file
├── package-lock.json                   # Contains the name, dependencies, and locked version of the project
├── package.json                        # Holds metadata, manages the project's dependencies, scripts, and ver.
├── README.md                           # Contains project information

It has the following subfolders and files:

├── controllers                     
	/admin.js                           # CRUD logic for job posting
    /controller.js                      # CRUD logic for user management system (admin privilege)
    /shop.js                            # CRUD logic for applying for a job
    /user.js                            # Logic for login/ registration

├── models                       
	/cart.js                            # Model for applied to object that connects users to job listings
	/product.js                         # Model for job listing object in db
	/user.js                            # Model for user object in db

├── node_modules                        # Folder for all node files

├── public                       
	├── css                             # Folder for css stylesheets
		/addJob.css                     # For post job listing page
		/appliedTo.css                  # For student applied to jobs page
		/bootstrap.min.css              # For bootstrap
		/contact.css                    # For contact pages
		/createAccount.css              # For account registration page
		/delete.css                     # For admin job listing page
		/landing_Page.css               # For app landing page
		/listing-details.css            # For job listing details page
		/listings.css                   # For student and employer index pages
		/main.css                       # For index pages
		/style.css                      # For user management pages

	├── images                          # Folder for static images
	
    ├── js                       
        /bootstrap.bundle.min.js        # Bootstrap scripts
        /deleteAnimation.js             # Delete animation for job listing cards
        /index.js                       # CRUD scripts for user management system
        /jquery.min.js                  # Reduces load times and bandwidth usage on app
        /profile.js                     # Scripts for sending a user profile

├── routes                     
	/admin.js	                        # Gets url path for admin pages and sends a request for that page
    /router.js	                        # Gets url path for employer pages and sends a request for that page
    /shop.js	                        # Gets url path for pages related to applying for a job and sends a request for that page
    /user.js	                        # Gets url path for login pages and sends a request for that page

├── services                
	/render.js                          # Sends the correct pages for the requested route

├── util                      
	/database.js                        # Creates a connection between our database and our app

├── views                                     
	/add-product.ejs                    # Create and post a job listing
	/add_user.ejs                       # Create a new user through admin user management system
	/admin.ejs                          # Interface for user management system, displays a list of users in db
	/adminHome.ejs                      # Admin homepage, links to user management page and job listings
	/adminIndex.ejs                     # Admin job listing page for listings deletion
	/applicationSuccessful.ejs          # Application successful prompt after applying to a job
	/base.ejs                           # User login page for the app
	/cart.ejs                           # Applied to page - displays a list of jobs the student has applied to
	/coverLetter.ejs                    # Static example cover letter page
	/edit-product.ejs                   # Page for editing existing job listings
	/employerContact.ejs                # Contact page for employers
	/employerHome.ejs                   # Employer homepage - displays a list of applicants for their jobs
	/index.ejs                          # Student homepage - displays a list of job listings
	/landingPage.ejs                    # Landing page for our app, also the home route
	/product-detail.ejs                 # Job listing details - displays more information on a job listing
	/profile.ejs                        # Application form for students when applying for a job
	/profile1.ejs                       # Student profile page
	/profile2.ejs                       # Employer profile page
	/profile3.ejs                       # Admin profile page
	/register.ejs                       # Account registration page
	/resume.ejs                         # Static example resume
	/studentContact.ejs                 # Contact page for students
	/update_user.ejs                    # Updates an existing user in the db through admin page

	├── layouts                         # Contains reusable ejs files, i.e. headers, footers, etc.
		/_footer.ejs                    # Footer template for user management system
		/_form.ejs                      # Form template for user edit and deletion for user management
		/_header.ejs                    # Header template for user management system
		/_show.ejs                      # Displays each user object in the db on admin dashboard
		/_adminNavigation.ejs           # Nav bar for admin index page
		/_carousel.ejs                  # Banner that cycles through static images
		/_employerNavigation.ejs        # Nav bar for employer index page
		/_end.ejs                       # Footer template for all index pages
		/_head.ejs                      # Header template for all index pages
		/_sidebar.ejs                   # Sidebar template for all index pages
		/_studentNavigation.ejs         # Nav bar for student index page
```

## Image references:
- Profile Pictures:
  https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=170667a&w=0&h=8haDTC2HXTF6Qb0TkjDy3FauBCd9PCchl6KKX2cUpqg=
  https://media.istockphoto.com/photos/headshot-of-cheerful-handsome-man-with-trendy-haircut-and-eyeglasses-picture-id1171169127?k=20&m=1171169127&s=612x612&w=0&h=DxYc1UDQagCiuuaiR1OMRztEsOnWBXwjLPlVqVnn4eY=
  https://annemariesegal.files.wordpress.com/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=750

- Job Listing Images:
  Fakebook: https://nathanjurgenson.files.wordpress.com/2010/05/facebook-fakebook.jpg
  Fake Company: https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg
  Tesla: https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg

- Background Images:
  blue background: https://media.istockphoto.com/videos/defocused-seamless-loop-background-video-id1016831586?s=640x640
  Landing Page: https://www.google.com/url?sa=i&url=http%3A%2F%2Fbluewaterplumbingnc.com%2Fbluewater%2F&psig=AOvVaw3ROZtDU0NbufozE3pOUy1X&ust=1651871244938000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCICfkIqiyfcCFQAAAAAdAAAAABAI

## Code References:
- Create account page template: https://colorlib.com
- Profile Page: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631#
- Welcome page: https://getbootstrap.com/docs/4.0/examples/album/
- Landing page: https://startbootstrap.com/theme/grayscale
- Successful job post/contact form submitted: http://schauhan.in/Examples/Payment_Success/index.html#
- Contact us page: https://colorlib.com/wp/template/contact-form-12/
- Mongoose shop app: https://www.youtube.com/playlist?list=PLGTrAf5-F1YLPa_HeR-_IB4LkMUTAiUJU

## How to Install and Run Project:

## How to use Connectify:

### As a student:
1. Login to an existing account or create a new one
   
<img src="https://user-images.githubusercontent.com/18428358/170604695-f711a0c5-9bba-4d98-b739-73605d7a2398.PNG" width="200" height="400">

2. Browse the home page to see all the available jobs
   
<img src="https://user-images.githubusercontent.com/18428358/170605628-1550576f-b952-4710-a863-1dbbce9bcdc7.PNG" width="200" height="400">

3. You can view more detail for the project by clicking `View Details`
   
<img src="https://user-images.githubusercontent.com/18428358/170606371-bb908aef-9160-4729-86ab-e8de77a9c530.PNG" width="200" height="400">

4. If you choose to apply for a job fill out the profile page and click `Apply`

<img src="https://user-images.githubusercontent.com/18428358/170606472-afef36f6-5ac5-47ab-afd2-e104a75a4925.PNG" width="200" height="400">

5. Click the `Applied To` tab in the nav bar to view all the jobs you have applied to

<img src="https://user-images.githubusercontent.com/18428358/170606558-e8769fdf-c130-4650-8df1-2fabc21ab0ce.PNG" width="200" height="400">

6. Click the `Contact Us` tab in the nav bar to find our contact info

<br>

7. Click the `Sign Out` tab in the nav bar to sign out of our app

### As an employer:
1. Login to an existing account or create a new one
   
<img src="https://user-images.githubusercontent.com/18428358/170604695-f711a0c5-9bba-4d98-b739-73605d7a2398.PNG" width="200" height="400">

2. Browse the home page to see all the applicants who have applied to the jobs you have posted

<img src="https://user-images.githubusercontent.com/18428358/170624389-2b5e8f28-e9a3-4b6a-a05c-51071a76076e.PNG" width="200" height="400">

3. Click the `Add Listing` tab in the nav bar and fill out the form to post a new job

<img src="https://user-images.githubusercontent.com/18428358/170624527-ab450976-a397-4d47-8c56-677b68d9828f.PNG" width="200" height="400">

4. Click the `Contact Us` tab in the nav bar to find our contact info


5. Click the `Sign Out` tab in the nav bar to sign out of our app

### As an employer:
1. Login to the admin portion of the app by using the correct credentials

<img src="https://user-images.githubusercontent.com/18428358/170604695-f711a0c5-9bba-4d98-b739-73605d7a2398.PNG" width="200" height="400">

2. Click the `All Users` button in the banner to view all the users who have joined our app

<img src="https://user-images.githubusercontent.com/18428358/170624860-279901cf-efb0-4b2a-9ffc-078b38ff1d21.PNG" width="200" height="400">

3. Use the `pencil` icon to edit the info of an existing user or the `x` icon to delete the user from our database

<img src="https://user-images.githubusercontent.com/18428358/170625013-836a1a6b-7961-4f55-a9b6-190ce60d62b3.png" width="200" height="400">

4. Click the `New User` button and fill out the form to add a new user to our database

<img src="https://user-images.githubusercontent.com/18428358/170625265-10b3c763-9d8f-4422-a416-af717eb54bfe.PNG" width="200" height="400">

5. Click the `Connectify` text in the header to get back to the home screen



6. Click the `Listings` button in the banner to view all the jobs that are posted on our app

<img src="https://user-images.githubusercontent.com/18428358/170625368-4233e05d-7810-4660-a487-bdc6cc989cd7.PNG" width="200" height="400">

7. Click the `x` icon to delete the job listing from our database



8. Press `Click to find out more` text to view all details for the job posting

<img src="https://user-images.githubusercontent.com/18428358/170625517-2cd8bee5-45dd-4ba4-8c77-9807c75fac5d.PNG" width="200" height="400">

9. Click the `Console` tab in the nav bar to go back and view all the users on our app or click the `Home` tab to go back to the admin home page



10. Click the `Sign Out` tab in the nav bar to sign out of our app


## Contact Info:

|       Name            |       Github ID      |          Email         |
-------------------------------------------------------------------------
| Prabhjeet Bains       | Prab-Bains           | prab.bains13@gmail.com |
-------------------------------------------------------------------------
|   Benny Chao          | Bnyaoo               | bennychao@live.ca      |
-------------------------------------------------------------------------
| Dhruv Gupta           | Dhruv-2974           | dhruv.g2974@gmail.com  |
-------------------------------------------------------------------------
| Jiang Peng (Jerry) Han  | TheRedLegionRises    | jerry000@hotmail.ca  |
-------------------------------------------------------------------------