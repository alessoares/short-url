import { config } from '../config/Constants';
import mongoose from 'mongoose';

export class MongoConnection {
    public async connet(): Promise<void> {
        try {
            await mongoose.connect(config.MONGO_CONNECTION);
            console.log('Connected to database');
        } catch(error){
            console.log(error);
        }
    }
}