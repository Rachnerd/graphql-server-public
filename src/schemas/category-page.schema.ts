import { makeExecutableSchema, gql } from 'apollo-server';

const typeDefs = gql`
    type Breadcrumb {
        id: String!
        title: String!
        image: Image!
    }

    type Link {
        id: String!
        title: String!
        image: Image
    }

    type Image {
        src: String!
        alt: String
    }

    type MediaAsset {
        usage: String
        mimetype: String!
        resourceLocation: String!
        description: String
    }

    type CategoryPage {
        breadcrumbs: [Breadcrumb!]!
        links: [Link]!
        assets: [MediaAsset]!
    }

    type Query {
        categoryPage(locale: String!, id: String): CategoryPage!
    }

`;

const resolver = {
    Query: {
        categoryPage: (obj, params) => params
    },
    CategoryPage: {
        links: ({locale, id}, {}, {dataSources: {categoriesAPI}}) =>
            categoriesAPI.getChildCategory(locale, id),

        breadcrumbs: ({locale, id}, {}, {dataSources: {categoriesAPI}}) =>
            categoriesAPI.getBreadcrumbs(locale, id),

        assets: ({locale, id}, {}, {dataSources: {categoriesAPI}}) =>
            categoriesAPI.getAssets(locale, id)
    }
};

export const categoryPageSchema = makeExecutableSchema({
    typeDefs,
    resolvers: [resolver]
});
