import { mergeSchemas } from 'graphql-tools';
import { categoryPageSchema } from './category-page.schema';

export const schema = mergeSchemas({
    schemas: [
        categoryPageSchema
    ]
});