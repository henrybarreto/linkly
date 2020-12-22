import mongoose from 'mongoose';

async function dbConnect(MONGODB_URL) {
  try {
    const conn = await mongoose.connect(MONGODB_URL,{ useNewUrlParser: true, useUnifiedTopology: true});

    return conn;
  } catch(error) {
    console.error(error);
  }
}

async function dbDesconnect() {
  try {
    mongoose.connection.close();
  } catch(error) {  
    console.error(error);
  }
}

export {dbConnect, dbDesconnect};