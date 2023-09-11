import { readFileSync } from 'fs';
import { join } from 'path';
import * as yaml from 'js-yaml';

export default () =>
  yaml.load(
    readFileSync(join(__dirname, `src/config/config.${process.env.NODE_ENV}.yaml`), 'utf8'),
  );
