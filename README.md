# The Report Viewer App

## Overview

The account manager of a fictional client company needs to view reports on how employees are making phone calls and using mobile data. This application provides a user interface to the API to allow the account manager to view available reports and data for each report for the specified billing period.

**Note:** The billing period is passed through the GET parameter, e.g., `http://localhost:3000/reports/41?billingPeriod=201708`. This allows us to copy/paste and share the link with reports with other people.

## Prerequisites

- Node.js (version 20.x or later)
- npm (version 10.x or later)

## Getting Started

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

1. Start the fake REST API server:
    ```sh
    npm run server
    ```

2. Start the development server:
    ```sh
    npm run dev
    ```
3. fake REST API server will be running at:
    ```
    http://localhost:8080
    ```

4. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

### Building for Production

1. Build the application:
    ```sh
    npm run build
    ```

2. Start the production server:
    ```sh
    npm start
    ```

3. Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```

## API

The application fetches data from the following API endpoints:

- `GET /api/reports` - Retrieves a list of available reports.
- `GET /api/reports/{reportId}-{billingPeriod}` - Retrieves data for the specified report and billing period.

## Project Structure

- `src/` - Contains the source code of the application.
- `public/` - Contains static assets.
- `fixtures/` - Contains mock API responses for development.
- `fixtures/routes.json` - Contains rewrited end-points for development.
- `__tests__` - Contains test files.

## License

This project is licensed under the MIT License.