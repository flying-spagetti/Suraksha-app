Domestic Violence Support System
This project is a web-based application designed to provide comprehensive support for victims of domestic violence. It enables users to report incidents, access critical resources, and connect with authorities or supporters in a secure and user-friendly manner.

Features
Frontend
User Role Selection: Identify as a victim or a supporter.
Immediate Help Assessment: Determine urgency and take action accordingly.
Geolocation Integration: Notify authorities with the user’s current location.
Dynamic Navigation: Redirect to different pages based on user interactions.
Reports Page: View submitted reports and their statuses.
Responsive Design: Ensures usability across devices.
Backend
Report Management: Create and retrieve reports from a database.
Redirect Support: Provide functionality to redirect to the homepage.
RESTful API: Backend endpoints for seamless communication with the frontend.
Spring Boot Framework: Robust backend infrastructure.
Technology Stack
Frontend
Framework: Next.js (React-based)
Styling: Tailwind CSS
Icons: Lucide React
Notifications: React Toastify
Backend
Framework: Spring Boot
Database: MySQL/PostgreSQL/H2 (Configurable)
ORM: JPA/Hibernate
Getting Started
Prerequisites
Frontend: Node.js, npm/yarn.
Backend: Java 17+, Maven/Gradle.
Database: MySQL/PostgreSQL/H2.
Installation
Frontend
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/domestic-violence-support.git
cd domestic-violence-support/frontend
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm run dev
Backend
Navigate to the backend directory:
bash
Copy code
cd domestic-violence-support/backend
Configure application.properties for your database:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/domestic_support
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Build and run the project:
bash
Copy code
mvn spring-boot:run
API Endpoints
POST /api/reports: Submit a new report.
GET /api/reports: Retrieve all reports.
GET /api/reports/home: Redirect to the homepage.
