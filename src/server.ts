import http from 'http';
import * as dotenv from "dotenv";
import express, { Express } from 'express';
import apiRoutes from './routes';

// Load env vars
dotenv.config();

// Initial app
const app: Express = express();

// Initial port
const PORT: number = 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount api routes
app.use('/api/v1', apiRoutes);

// Create server and listen to server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
