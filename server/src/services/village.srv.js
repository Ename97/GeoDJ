const { getVillages, getVillageById } = require('../models/village.model');

async function getAll(db){

  try {

    const client = await db.connect();
    
    const data = await getVillages(client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    client.release();
  }
}

async function getById(db,id){

  try {

    const client = await db.connect();
    
    const data = await getVillageById(id,client);

    if(data)
      return data.rows;

  } catch (err){

    return null;
  } finally {

    client.release();
  }
}

const Village = { getAll, getById };

module.exports = { Village };