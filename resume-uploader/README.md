## Setup to run locally
1. Clone the repository
2. Install dependencies for the project
   ```
   cd resume-builder
   npm install express pg sequelize dotenv
   ```
4. Run the application using
   ```
   node src/app.js
   ```
6. The application should start running on **localhost:8080** without errors.
7. To check if the application is running, try accessing any API (e.g, http://localhost:8080/api/getResumeById/1)
