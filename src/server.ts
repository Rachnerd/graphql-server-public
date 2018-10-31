import { ApolloServer } from "apollo-server";
import { CategoriesApi } from "./data-sources/categories.api";
import { schema } from './schemas';



const server = new ApolloServer({
    schema,
    mocks: false,
    debug: true,
    dataSources: () => ({
        categoriesAPI: new CategoriesApi()
    })
});

const port = process.env.PORT || 8080;

server.listen(port).then(({url}) => {
    console.log(`🚀  Server ready
   at ${url}`);
});

declare const module: any;
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.stop());
}