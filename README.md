# Daily One

Daily One is a journaling web application built to help users develop a consistent reflection habit through one prompt each day. The application focuses on simplicity by presenting a single daily prompt and a clean writing interface that encourages thoughtful responses without distractions.

The project is built as a full stack web application using React for the frontend, Node.js and Express for the backend, and MongoDB Atlas for data storage.

## How It Works

Users create an account and log in to access the journaling interface. After logging in the application loads the prompt for the current day. The user writes a response and submits their entry, which is stored in the database along with the user id and the date. Users can return later to view their previous entries.

Prompts are stored in the database and added using a seeding script. The script inserts a predefined list of prompts into the prompts collection so the application always has prompts available to display.

Run the seed script once during setup:

```
node seedPrompts.js
```

## Tech Stack

Frontend  
React  
Tailwind CSS  

Backend  
Node.js  
Express  

Database  
MongoDB Atlas  

## Running Locally

Clone the repository and install dependencies

```
git clone https://github.com/druiw/Daily-One.git
cd daily-one
npm install
```

Create a `.env` file

```
MONGODB_URI=your_connection_string
JWT_SECRET=your_secret
```

Seed the prompts

```
node seedPrompts.js
```

Start the backend server

```
node server.js
```

Start the frontend

```
npm run dev
```

## Screenshots

<img width="1900" height="937" alt="image" src="https://github.com/user-attachments/assets/383565f5-0e1c-40bf-8dd4-780339c0a5a0" />

<img width="1906" height="940" alt="image" src="https://github.com/user-attachments/assets/8d9b5670-e64c-4c93-836d-51575d39b4dd" />

