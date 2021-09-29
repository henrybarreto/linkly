import * as Db from '../database/db_moogose_connection.js';

// eslint-disable-next-line require-jsdoc
async function loadDb() {
  try {
    await Db.dbConnect(process.env.MONGODB_URL) ?
    console.info('Connected with DB!') :
    process.exit(0);
  } catch (error) {
    console.log('Could not connect to the database')
    console.error(error);
    process.exit(0);
  }
}

export default loadDb();
