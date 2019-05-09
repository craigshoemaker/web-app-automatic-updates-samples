const client = require('./db.js');

const databaseDefinition = { id: "stocksdb" };
const collectionDefinition = { id: "stocks" };
const stock = {
    "id": "e0eb6e85-176d-4ce6-89ae-1f699aaa0bab",
    "symbol": "ABC",
    "price": "100.00",
    "change": "0.00",
    "changeDirection": "+"
};

const setupAndSeedDatabase = async ()  => {

  const { database: db } = await client.databases.create(databaseDefinition);
  console.log('Database created.');

  const { container } = await db.containers.create(collectionDefinition);
  console.log('Collection created.');

  await container.items.create(stock);
  console.log('Seed data added.');
};

setupAndSeedDatabase().catch(err => {
  console.error(err);
});
