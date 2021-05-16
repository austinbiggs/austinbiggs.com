require("dotenv").config();

module.exports = {
  client: {
    name: "austinbiggs",
    service: {
      name: "austinbiggs-api",
      url: "https://api.austinbiggs.com/v1/graphql", // use this for localhost
      localSchemaFile: "./gql/schema.gql",
    },
    includes: ["frontend/**/gql/*.tsx"],
  },
};