import { type SchemaTypeDefinition } from 'sanity';
import cars from "./cars";
import blog from './blog';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars, blog],
}
