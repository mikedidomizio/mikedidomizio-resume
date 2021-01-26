# mikedidomizio.com

Uses Vue to build the website for mikedidomizio.com.

On merge to master, deploys to S3 via GitHub actions.

## Requirements

- Node >= 10.18.1

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## Testing

```
# Tests all the below test suites
yarn test

# Unit testing.  Unit testing of component logic
yarn test:unit

# Snapshot testing.  Tests DOM structure for unexpected changes
yarn test:snapshot

# Integration testing
yarn test:integration

# Visual regression testing.  Takes screenshots of page and checks for changes between the current one and the previously saved one
yarn test:visual
```
