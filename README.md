# nestjs slate

- nestjs
- eslint, prettier, eslint-config-airbnb-typescript
- husky, lint-staged

## running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## commit hooks

- pre-commit
  - `npm run check-ts`
  - `npx --no-install lint-staged`
- pre-push
  - `npm test`

## commit tags

- build: npm, package
- ci: ci config
- doc: documentation, comment
- feat: new feature
- fix: bug fix
- ref: refactor, neither feature or bug fix
- style: code styling change, no code meaning change
- test: test
- etc: etc
