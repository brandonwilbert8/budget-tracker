import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.2mvk81z.mongodb.net/?authMechanism=DEFAULT`;
export const db_port = process.env.DB_PORT;
