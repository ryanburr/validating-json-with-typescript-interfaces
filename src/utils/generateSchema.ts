import path from 'path';
import * as TJS from 'typescript-json-schema';

import { writeFile } from '../utils/writeFile';
import { properCase } from '../utils/properCase';

export async function generateSchema(exampleName: string): Promise<void> {
  // Ensure required env vars exist
  if (!process.env.SOURCE_DIR || !process.env.OUT_DIR) {
    throw new Error('Required directories not defined.');
  }

  // Tell typescript-json-schema which files to look at
  const interfacePath = path.join(process.env.SOURCE_DIR, `${exampleName}.interface.ts`);
  console.log(`Reading interface from ${interfacePath}`);
  const program = TJS.getProgramFromFiles([interfacePath]);

  // Generate the schema for all files specified above
  console.log(`Generating schema...`);
  const schema = TJS.generateSchema(program, '*', {
    noExtraProps: true,
    required: true,
    ref: false
  });

  // Extract a specific schema from all of the generated ones
  const baseName = `${properCase(exampleName)}Payload`;
  const definition = schema?.definitions?.[baseName];
  if (!definition) {
    throw new Error(`No definition found for ${baseName}`);
  }

  // Write the schema to a file
  const jsonSchema = JSON.stringify(definition, null, '  ');
  const buildPath = path.join(process.env.OUT_DIR, `${exampleName}.schema.json`);
  await writeFile(buildPath, jsonSchema);
  
  console.log(`Schema generated at ${buildPath}`);
}