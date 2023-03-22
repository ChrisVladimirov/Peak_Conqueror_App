# Peak Conqueror App

The PeakConqueror App strives to achieve one main goal - help friends organize their next mountain treks together.
The application has several key functionalities:
- <em>Route service</em>: provides info about popular and less-known routes that can 
be easily viewed and added to favorites
- <em>Weather service</em>: easy-to-read forecast data for 5, 7 or 10 days in several locations (huts, peaks, chalets, etc.)
- <em>Admin service</em>: helps manage admin rights by the owner user

# Technologies used
# Frontend:
- ReactJS for the frontend
   
   -> supplemented by `React-router-dom` and 
      `react-bootstrap` libraries

   -> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information
.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remo
ve the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into
your project so you have full control over them. All of the commands except `eject` will still work, but they will point
to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn'
t feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it
when you are ready for it.
# Backend:
- Java Spring MVC, Spring Boot, Spring security
- Hibernate ORM
- JWT & Oauth2 authentication and authorization
- MySQL for the persistence layer

# External libraries and resources:
- <b>Visual Crossing</b> for the weather data

### :page_with_curl: License:
The project is licensed under the [GPL-3.0 license](LICENSE)

# Screenshots:
Login page:
![image](https://user-images.githubusercontent.com/84380496/188314254-ac01d54d-8ac6-4811-9f0a-437a65f23ace.png)

Home page for logged-in user:
![image](https://user-images.githubusercontent.com/84380496/188314342-d433f38a-1f0a-4d63-b103-2b54cf0844b8.png)
![image](https://user-images.githubusercontent.com/84380496/188314372-ac874e06-6195-4c5d-a225-423b2d18591d.png)

Routes functionality:
![image](https://user-images.githubusercontent.com/84380496/188314423-36ffe5f3-a494-41a4-b19d-bf256742b621.png)
Brief Info about every route can be viewed by mountaineers:
![image](https://user-images.githubusercontent.com/84380496/188314498-fc34ccc0-a380-4b61-94e5-61ffa26b4887.png)

Weather Forecast functionality:
![image](https://user-images.githubusercontent.com/84380496/188314816-7f333803-175d-495f-a8b4-612272da47c8.png)