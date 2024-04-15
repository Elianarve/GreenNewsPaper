# React + Vite 
div align="center">
  <h1>InnovaTechNews 🏢💚</h1>
</div>

<p align="center">
  <a href="https://github.com/JnogueraGonzalez/">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Jessica Noguera">Jessica Noguera
  </a>
  <a href="https://github.com/Elianarve">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Eliana Redón">Eliana Rendón
  </a>
  <a href="https://github.com/SarayAnta">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Saray Rodríguez">Saray Rodríguez
  </a>
  <a href="https://github.com/BeatrizMercado">
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Beatriz Mercado">Beatriz Mercado
  </a>
  <a href="https://github.com/RaquelLores"> 
    <img src="https://img.icons8.com/ios-filled/30/000000/github.png" alt="Raquel Lores">Raquel Lores 
  </a>
</p>

<div align="center">
  <p>Welcome to InnovaTechNews!</p>
</div>

## Description

Full-stack development of a content management web application, with user session, different roles, token and encrypted password.

🌿 InnovaTechNews is a energy efficient web application designed to enable users to post and update tech news with pictures. 

🔑 Administrators have additional capabilities, including the possibility to delete news articles and assign the administrator role to users.

✨ The landing page presents an attractive and user friendly interface, that prompts the user to log in or to navigate to the register page.

🌍 As web developers, we adjust our code to act in the global effort to reduce carbon footprint. We have created new design patterns and refactor our code to decrease energy consumption. Every little Watt we save can have a big impact!

## Tecnologies Used To Code

- Frontend: We are using React - React Router - React Hook Form - TailwindCSS - CSS3 - Vite - Jest - supertest - Spline - Cloudinary Cloud - Axios - Yup - Fetch API - JSONServer before we connected the backend.

- Backend connected to the Frontend: TypeScript - Node.js with Express - MySQL data base - for CRUD operations we are using Sequelize - POSTMAN - Nodemon - Jest - supertest - CORS - bcrypt and JWT libraries for user session management. 

## Installation

To explore InnovaTechNews app in your own environment, please follow this steps:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Elianarve/GreenNewsPaper.git
    ```

2. **Install the dependencies:**

    ```bash
    cd backend
    npm install
    
    ```bash
    cd frontend
    npm install
    ```

3. **Launch the Application in the Frontend and in the Backend:**

    ```bash
    npm run dev
    ```

    The application will be available in [http://localhost:5173/](http://localhost:5173/)

## Functionality that you can use


Once the application is installed and running, you can do the following:

- Add a new article: Click the button to navigate to the text editor page and add your text and picture. The list of articles with pictures that you've created will appear on your homepage.
- Edit an existing article: Click the "Edit" pen located under the picture to edit the text and picture.
- Explore your own news list with pictures on your homepage. If you have the Administrator role, you can also delete them.


# Project folder structure in frontend/ (the Structure of the backend/ follows ).

```
|-- src/
|   |-- assets/
|   |   |-- img/
|   |   |   |-- arrow.svg
|   |   |   |-- delete-icon.svg
|   |   |   |-- ...
|   |
|   |-- components/
|   |   |-- Card.jsx
|   |   |-- Footer.jsx
|   |   |-- LoginForm.jsx
|   |   |-- LogOut.jsx
|   |   |-- Nav.jsx
|   |   |-- RegisterForm.jsx
|   |   |-- Spline.jsx
|   |   
|   |-- context/         
|   |   |-- UserContext.jsx
|   |   
|   |-- layout/ 
|   |   |-- LayoutPrivate.jsx
|   |   |-- LayaoutPublic.jsx 
|   |
|   |-- pages/
|   |   |-- css/
|   |   |   |-- create.css
|   |   |-- Create.jsx
|   |   |-- Home.jsx
|   |   |-- Landing.jsx
|   |   |-- Login.jsx
|   |   |-- NewsDetails.jsx
|   |   |-- Register.jsx
|   |
|   |-- router/
|   |   |-- router.jsx
|   |
|   |   |-- logReg.js
|   |   |-- newsServices.js
|   |
|   |-- test/
|   |   |-- testing.test.jsx 
|   |
|   |-- main.css
|   |-- main.jsx
|-- index.html
```

## Structure in the frontend/:

The project is structured as follows in the frontend:

1. src/: Contains all the source files of the application.
2. assets/: Contains static files like images, fonts, and sounds used in the application.
3. components/: Contains the React components used in the application, such as Home, NewItem, Edit, Footer, Gallery, Card, etc.
4. router/: Contains the application's router that maps routes to the corresponding components.
5. services/: Contains the files that manage the API calls to get, add, edit, and delete bicycles, such as getBicycles, addBicycle, deleteBicycle, updateItem, etc.
6. test/: Contains the methods testing with Jest.

## Logic

Here is the general logic of the code:

1. **Environment and Tools Setup**: Various tools and technologies are used to develop the application, including React.js for building user interfaces, Vite.js as a build tool and development server, and other dependencies such as react-router-dom and Tailwind for styling.

2. **Project Structure**: The project is organized into different folders, in the Frontend and Backend, based on the function of the files, such as components for React components, services for service functions like communication with the API, router to define application routes, among others.

3. **React Components**: Several React components are defined that compose the application's user interface, such as Home, NewItem, Edit, Gallery, Card, Nav, Footer, etc. Each component has its own purpose and functionality within the application.

4. **Styling**: Styles are defined using TailwindCSS within the React components. We also use CSS3.

5. **Routing Management**: react-router-dom is used to manage navigation and application routes. This allows the application to have different views and pages that are rendered based on the current URL.

6. **API Communication**: Functions are defined in the services directory to perform CRUD (Create, Read, Update, Delete) operations in the MySQL database. These functions use axios to make HTTP requests to the API with fewer lines of code than with 'fetch'.

## Cloudinary: Image Management

We have integrated image storage and management functionality using Cloudinary. This allows us to offer an optimal experience to our users by optimizing media upload, storage, management, and delivery.

### What is Cloudinary?

Cloudinary is a Software as a Service (SaaS) solution that provides a complete solution for image and video needs in web or mobile applications.

### Configuration for Our Project

To integrate Cloudinary into our project, we have followed these steps:

1. **Create an Account on Cloudinary:**

    Sign up for Cloudinary for free through the following link: [https://cloudinary.com/](https://cloudinary.com/).

2. **Get Access Credentials:**

    Make sure to obtain the necessary credentials, including the `Cloudname`, `Api Key`, and `Api Secret`.

3. **Configure Cloudinary in the Project:**

    Follow the instructions provided in Cloudinary's official documentation to configure the integration into your project.

# Project folder structure in backend/

```
|-- _test_/
|   |-- news.test.ts
|   |-- users.test.ts
|   
|-- controllers/
|   |-- authController.ts
|   |-- newsController.ts
|   |-- userController.ts
|   
|-- database/
|   |-- connection_db.ts
| 
|-- helpers/
|   |-- validateResultUsers.ts
|   |-- validationHelper.ts
| 
|-- interfaces/
|   |-- AuthenticatedRequestInterface.ts
|   |-- newsInterface.ts
|   |-- User.ts
|   |-- userInterface.ts         
|   
|-- middleware/ 
|   |-- authMiddleware.ts
|   |-- rolMiddleware.ts
|   |-- verifyToken.ts
|   
|-- models/
|   |-- newsModel.ts
|   |-- userModel.ts
|  
|-- routes/
|   |-- authRouter.ts
|   |-- NewsRouter.ts
|   |-- userRouter.ts
|   
|-- utils/
|   |-- token.ts
|   
|-- validators/
|   |-- newsServices.ts
|   |-- userValidator.ts 
|
|-- .env
|-- .env.example
|-- app.ts
|-- config.ts
|-- jest.config.js
|-- tsconfig.json
```

## Contributions

Contributions are welcome! If you would like to contribute to the project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your repository.
5. Submit a pull request with your changes.

## Contact

If you have any questions or suggestions about the project, feel free to contact us via LinkedIn.
Thank you for your interest! ✨
