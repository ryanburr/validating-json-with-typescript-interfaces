import fs from 'fs';
import path from 'path';

export function writeFile(
  filePath: string,
  contents: string | NodeJS.ArrayBufferView
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    fs.mkdir(path.dirname(filePath), { recursive: true }, function (err) {
      if (err) return reject(err);

      fs.writeFileSync(filePath, contents);
      resolve();
    });
  });
}
