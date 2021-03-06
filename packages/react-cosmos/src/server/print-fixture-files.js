import { getCosmosConfig } from 'react-cosmos-config';
import { findFixtureFiles } from 'react-cosmos-voyager2/lib/server';

export default async function printFixtureFiles() {
  const cosmosConfig = getCosmosConfig();
  const fixtureFiles = await findFixtureFiles(cosmosConfig);

  console.log(JSON.stringify(fixtureFiles, null, 2));
}
