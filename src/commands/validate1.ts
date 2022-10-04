
import path from 'path';
import dotenv from 'dotenv';

import { validateJson } from '../utils/validateJson';

dotenv.config();

async function main() {
  try {
    // Ensure required env vars exist
    if (!process.env.OUT_DIR) {
      throw new Error('Required directory not defined.');
    }
  
    // Read our JSON schema that was built
    const schemaPath = path.join(process.env.OUT_DIR, 'example1.schema.json');

    // Validate a test payload
    const testPayload = {
      name: 'Ryan',
      hometown: 'Rochester, MI'
    };
    validateJson(schemaPath, testPayload);
    
    console.log(`Test payload validated!`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();