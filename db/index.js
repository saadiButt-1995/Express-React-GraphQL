import mongoose from 'mongoose';
import { environment } from '../config/config.js';
import { friendSchema } from '../Schemas/Friends.js';
import { seriesSchema } from '../Schemas/Series.js';
const env = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to DB");
});

export const Friends = mongoose.model('Friends', friendSchema);
export const Series = mongoose.model('Series', seriesSchema);
