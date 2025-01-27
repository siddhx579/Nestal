# Nestal

Nestal is a full-stack web application designed for house renting. It includes a front-end built with React.js and a back-end powered by Node.js and Express, with MongoDB as the database.

## Project Structure

The project is organized into two main folders:

- **client**: Contains the front-end code built with React.js.
- **api**: Contains the back-end code written in Node.js and Express.

## Features

- User authentication (registration and login)
- Add, view, edit, and delete property listings
- Search and filter properties

## Tech Stack

### Front-End
- HTML, CSS, JavaScript
- React.js
- Tailwind CSS

### Back-End
- Node.js
- Express.js
- MongoDB

## Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- Code editor (e.g., VS Code)
- Git

## Getting Started

Follow these instructions to set up and run the project locally.

### Clone the Repository

```bash
git clone https://github.com/siddhx579/Nestal.git
cd Nestal
```

### Setting Up the Client

1. Navigate to the `client` folder:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The client will run on `http://localhost:5173` by default.

### Setting Up the API

1. Navigate to the `api` folder:
   ```bash
   cd ../api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file for environment variables like the env_sample file (e.g., MongoDB connection string):
   ```env
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/nestal?retryWrites=true&w=majority
   PORT=3000
   ```

4. Start the Node.js server:
   ```bash
   npm run dev
   ```

The API will run on `http://localhost:3000`.

## File Structure

```
Nestal/
├── client/            # Front-end code (React.js)
├── api/               # Back-end code (Node.js and Express)
├── README.md          # Project documentation
└── .gitignore         # Ignored files for Git
```

## Deployment

- **Client**: Deploy the React application using services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).
- **API**: Deploy the Node.js backend using platforms like [Heroku](https://www.heroku.com/), [AWS](https://aws.amazon.com/), or [DigitalOcean](https://www.digitalocean.com/).

## Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact:
- **Siddhant Kapoor**: siddhantkapoor579@gmail.com
- [GitHub Profile](https://github.com/siddhx579)
