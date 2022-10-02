import path from 'path';
import * as TJS from 'typescript-json-schema';
import dotenv from 'dotenv';
import { writeFile } from '../utils/writeFile';

dotenv.config();

async function main() {
  try {
    if (!process.env.SOURCE_DIR || !process.env.OUT_DIR) {
      throw new Error('Required directories not defined.');
    }
  
    const interfacePath = path.join(process.env.SOURCE_DIR, 'example3.interface.ts');
  
    console.log(`Reading interface from ${interfacePath}`);
  
    const program = TJS.getProgramFromFiles([interfacePath]);
  
    console.log(`Generating schema...`);
    
    const schema = TJS.generateSchema(program, '*', {
      noExtraProps: true,
      required: true,
      ref: false
    });
  
    const baseName = 'Example3Payload';
    const definition = schema?.definitions?.[baseName];
    if (!definition) {
      throw new Error(`No definition found for ${baseName}`);
    }
    
    const jsonSchema = JSON.stringify(definition, null, '  ');
    
    const buildPath = path.join(process.env.OUT_DIR, 'example3.schema.json');
    await writeFile(buildPath, jsonSchema);
    
    console.log(`Schema generated at ${buildPath}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();