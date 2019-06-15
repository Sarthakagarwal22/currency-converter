# currency-converter

This is a simple project, where in you can check the exchange rates of currencies, according to the data provied by https://exchangeratesapi.io/. The application is fully responsive and works seamlessly on mobile phones, tablets and laptops. You can also view the % drop or gain in the currency when compared to previous day. 

View the project, live [here](https://jolly-visvesvaraya-153452.netlify.com/)

### Functionalities

You can change the base currecny to any one from the drop down. The application will make a get request to https://exchangeratesapi.io/ with the corresponding base currency and give you exchange rates against it. You can also search for a specific symbol by typing in the search bar, without worrying about the case you type in, i.e. you can search in lower case too. You wont find the base currency in the exchange rate table. The application uses the functionalities of netlify, and hence employ CI/CD. That is, whenever any new update is pushed to the master branch of the application, the netlify server runs the build command and serves the application again from the hence built file. This entire continuous development process, requires no human input.

The project has been build using the following technologies

- [React](https://reactjs.org/) : This is the underlying frontend library, around which the application is built
- [Typescript](https://www.typescriptlang.org/) : This is super set of javascript, providing type checking and highlighting errors during development
- [Webpack](https://webpack.js.org) : This is used to bundle the application, since we did not use create-react-app to bundle the project
- [Styled-Components](https://www.styled-components.com/) : This module helps us to provide styling to our component and removing the classname hustle
- [Redux](https://redux.js.org/) : This module is used for intercomponent communication, when the components are not in a parent-children relationship

Following steps helps to setup development environment at your computer 
1. Clone the repository, using SSH or Https
2. Open a terminal inside the repository and run `sudo npm install`
3. Once the process is complete, run `npm start` to start a development server using webpack-development-server
4. Open `localhost:8080` and you can see the application running

The application uses the following libraries
- [Axios](https://www.npmjs.com/package/axios) : For making get request

The basic folder structure is loosely based upon Redux, with folders as components, containers, actions, reducers, helpers and local-data

Helpers contain css-variables, fonts, media query helper and api-response helper.
Local-Data folder contain images and config file. The config file contains all the Urls.

The application contain 4 independent dumb components, a drop down, a search bar, a header and a rates-pill. There are two smart components aka containers rates-pills and currency-converter.

The application is built such that the application can be extended anytime without any problems in directory structure. 
