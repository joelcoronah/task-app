import {startApolloServer} from "./app.js";
import { resolves } from "./graphql/resolves.js";
import { typeDefs } from "./graphql/typeDefs.js";

import { connectDB } from './db.js'

connectDB()

startApolloServer(typeDefs,resolves)
