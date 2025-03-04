# CRM Comparison Tool Backend

## Overview
The CRM Comparison Tool is a web application designed to help users compare products from the HP store. It features different access levels for employees, team leaders, and directors, ensuring that users can only access the information relevant to their roles.

## Features
- Product comparison functionality
- Role-based access control
- RESTful API for data retrieval and manipulation

## Technologies Used
- Node.js
- Express
- TypeScript
- MongoDB (or any other database of your choice)

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node package manager)
- MongoDB (if using MongoDB)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd crm-comparison-tool/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your database connection in the environment variables or configuration file.

### Running the Application
To start the backend server, run:
```
npm start
```
The server will be running on `http://localhost:3000` (or the port specified in your configuration).

## API Endpoints
- `GET /api/products` - Retrieve a list of products
- `POST /api/compare` - Compare selected products
- `GET /api/user/roles` - Retrieve user roles and permissions

## Contribution
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.