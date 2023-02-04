const PORTNO = 3001;
const DATABASE_URL = `mongodb://docker:mongopw@mongodb-server:27017`;
const BASE_URL = "http://node-js:3001";
module.exports = {
    PORTNO: process.env.PORTNO,
    DATABASE_URL: process.env.DATABASE_URL,
    BASE_URL: process.env.BASE_URL,
};
