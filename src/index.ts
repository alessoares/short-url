import { URLController } from './controller/URLController';
import express, { Request, Response, NextFunction } from 'express';
import { MongoConnection } from './database/MongoConnection';

const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connet();


const urlController = new URLController();
api.post('/shorten', urlController.shorten);
api.get('/:hash', urlController.redirect);

api.listen(3000, () => console.log('Express lintening on port 3000'));

