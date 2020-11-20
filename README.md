# Wine Search Frontend

A frontend application for searching for and inspecting wine batches or Lots.

Selected lots will list and break down the components of each batch based on a number of properties: **Year**, **Variety**, **Region** and **Year/Variety** combination

Connects to and depends on [Wine Search Backend](https://github.com/kieranongh/vin-demo) for data and API calls

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
Download or clone the repository then npm install the dependencies
```bash
> git clone https://github.com/kieranongh/vin-fe.git
> cd vin-fe
> npm install
```

## Set API port
If the backend is not running on the standard port, this frontend needs to know

Set the API port

```bash
export REACT_APP_API_PORT=3000
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
