import dotenv from 'dotenv';
import { generateSchema } from '../utils/generateSchema';

dotenv.config();

async function main() {
  try {
    await generateSchema('example3');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();