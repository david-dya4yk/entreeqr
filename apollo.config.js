module.exports = {
  client: {
    includes: ['src/**/*.gql'],
    excludes: ['node_modules/**/*', 'src/*.gen.ts'],
    service: {
      name: 'nft-api',
      url: 'http://localhost:3001/graphql',
    },
  },
}
