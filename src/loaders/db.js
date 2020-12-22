import * as Db from '../database/db_moogose_connection';

async function loadDb() {
  try {
    await Db.dbConnect(process.env.MONGODB_URL) ?
    console.log('Connected with DB!') :
    console.log('Erro on Mongoose connection');
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
}

export default loadDb;