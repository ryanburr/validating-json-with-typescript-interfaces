import fs from 'fs';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

export function validateJson(schemaPath: string, data: any): void {
  // Setup our JSON schema validator
  const ajv = new Ajv();
  addFormats(ajv);

  // Read our JSON schema
  console.log(`Reading JSON schema from ${schemaPath}`);
  const jsonSchema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));

  // Compile the JSON schema
  console.log(`Compiling the JSON schema...`);
  const schemaValidator = ajv.compile(jsonSchema);
  
  // Validate a test payload
  schemaValidator(data);

  // Report any errors
  if (schemaValidator.errors) {
    const errors: string[] = schemaValidator.errors.map(
      e => e.message ?? 'No message attached to this error'
    );
    throw new Error(errors.join(', '));
  }
}