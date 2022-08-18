module.exports = ({ env }) => ({
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: false,
        generateArtifacts: true,
        artifacts: {
          schema: env.graphqlSchemaFilePath
        },
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          tracing: true,
        },
      }
    }
})