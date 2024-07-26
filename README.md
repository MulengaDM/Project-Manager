# Project-Manager
# P# Project Management App

This is a prototype of a Project Management App built using Flask and SQLAlchemy. The app provides basic functionalities for managing projects and tasks within those projects. 

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Demo](#demo)

## Features

- Create and manage projects
- Add and manage tasks within projects
- User authentication (registration, login, logout)

## Requirements

- Python 3.7+
- PostgreSQL
- SSH access to remote PostgreSQL server

## Installation

### 1. Clone the repository

```sh
git clone <repository-url>
cd project-management-app

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [File Structure](#file-structure)
- [Demo](#demo)

## Features

- Create and manage projects
- Add and manage tasks within projects
- User authentication (registration, login, logout)

## Requirements

- Python 3.7+
- PostgreSQL
- SSH access to remote PostgreSQL server

## Installation

### 1. Clone the repository

cd project-management-app

### 2. Create and activate a virtual environment

python -m venv venv
source venv/bin/activate   # On Windows use `venv\Scripts\activate`

### 3. Install dependencies

pip install -r requirements.txt

### 4. Set up PostgreSQL database
Create an SSH Tunnel

Open a terminal and create an SSH tunnel to your remote PostgreSQL server:

ssh -L 5432:localhost:5432 up2129277@35.205.42.100 -p 22
Update app.py with your database URI

Ensure the SQLALCHEMY_DATABASE_URI in app.py is correctly set up:

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/project_management_db'
Replace username, password, and project_management_db with your actual PostgreSQL username, password, and database name.

### 5. Initialize the database

Run the following script to create the database tables:

python db_setup.py

## Usage

Running the Application
Start the Flask development server:

python app.py
Navigate to http://127.0.0.1:5000 in your web browser to use the app.

## Testing
Running Tests
To run the tests, execute the following command:

python app_test.py

## File Structure
php
Copy code
project-management-app/
│
├── app.py                # Main application file
├── app.js                # JavaScript file for client-side logic
├── app_test.py           # Test file for the application
├── db_setup.py           # Script to set up the database
├── requirements.txt      # Python dependencies
├── templates/            # HTML templates
│   └── index.html
└── static/               # Static files (CSS, JS, images)
    └── styles.css
