import mongoose from 'mongoose';

// eslint-disable-next-line require-jsdoc
async function dbConnect(MONGODB_URL) {
  try {
    const conn = await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true});
    return conn;
  } catch (error) {
    console.error(error);
  }
}

// eslint-disable-next-line require-jsdoc
async function dbDesconnect() {
  try {
    mongoose.connection.close();
  } catch (error) {
    console.error(error);
  }
}

export {dbConnect, dbDesconnect};
