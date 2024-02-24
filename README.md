# CarDekho

Welcome to CarDekho! This repository contains both the backend and frontend components of our car dealership application. Below you'll find details on both the backend server and the frontend interface.

## Backend

### Overview
The backend server is developed in Node.js using the MongoDB native driver to create RESTful APIs with authentication. It ensures ACID compliance by implementing transactions and enhances data privacy in REST endpoints by utilizing projections to omit sensitive information.

### Database Schema
You can view the provided database schema [here](https://dbdiagram.io/d/64a1c7e102bd1c4a5e5fc28c).

### Requirements
1. Implement admin, user, and dealership authentication using JWT.
2. Implement a mechanism to invalidate JWT for logout and password change.
3. Create common REST endpoints for both user and dealership:
   - View all cars
   - View all cars in a certain dealership
   - Add a new vehicle to the list of owned/sold vehicles at user/dealership end after a deal is complete
   - View all deals from a certain dealership
4. Create REST endpoints for user:
   - View dealerships with a certain car
   - View all vehicles owned by the user along with dealer info
   - View all deals on a certain car
5. Create REST endpoints for dealership:
   - Add cars to dealership
   - Add deals to dealership
   - View all vehicles the dealership has sold along with owner info
6. Post requests should handle multipart/form-data.
7. Implement asynchronous error handling using promises for all API endpoints.
8. Use ES6 compatible code.
9. Provide basic API documentation.
10. Use faker.js to create dummy data.
11. Do not use Mongoose.
12. Host the database.

## Frontend

### Overview
The frontend interface is developed using SvelteKit and Tailwind CSS. It provides secure authentication and role-based access, with distinct features tailored for users and dealerships.

### Features
1. **Secure Authentication and Role-Based Access:**
   - Users undergo JWT authentication upon signup and login.
   - Upon successful authentication, users are redirected to the main car dealership page tailored to their designated role: dealer or client.
   - Clear options for selecting dealer or client login are presented upfront.

2. **User:**
   - **Centralized Vehicle Display:** The main page showcases a comprehensive catalog of available vehicles with filtering options.
   - **Dealership Discovery:** A collapsible sidebar enables users to explore and select specific dealerships.
   - **Personalized Vehicle Showcase:** Users can access their acquired vehicles through a dedicated "My Vehicles" section.
   - **Streamlined Purchase Process:** A prominent "Buy" button facilitates swift and secure vehicle acquisition.
   - **Deal Section:** Users can view all deals related to a certain car, facilitating transparency and decision-making.

3. **Dealership:**
   - **Comprehensive Inventory Overview:** The main page presents all available vehicles within the dealership's inventory.
   - **Seamless Inventory Management:** Dealers can manage vehicle listings with options to view, add, edit car details, and track sold vehicles.
   - **Deal Section:** Dealers can add deals to their dealership and view all vehicles that have been sold along with owner information, ensuring efficient management of transactions.

## Getting Started

To get started with either the backend or frontend components, please refer to their respective README files.

## Contributions

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.
