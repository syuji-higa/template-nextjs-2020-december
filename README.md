# Use

- Framework: [Next.js](https://nextjs.org/) ([React](https://ja.reactjs.org/))
- Static typing: [TypeScript](https://www.typescriptlang.org/)
- PWA: [next-pwa](https://github.com/shadowwalker/next-pwa)
- Styling: [CSS Modules](https://github.com/css-modules/css-modules) + [SASS](https://sass-lang.com/)
- State management: [Recoil](https://recoiljs.org/)
- Lint & Formatter: [EditorConfig](https://editorconfig.org/) + [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- Test: [Jest](https://jestjs.io/ja/) + [React Testing Library](https://testing-library.com/) + [Cypress](https://www.cypress.io/)
- Component catalog: [Stroybook](https://storybook.js.org/) ([StoryShots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots) を含む)
- Hook script: [lint-staged](https://github.com/okonet/lint-staged) + [husky](https://typicode.github.io/husky/#/)

# Command

```sh
# dev
yarn dev

# build
yarn build

# start
yarn start
```

## Storybook
```sh
yarn storybook

# build
yarn build-storybook
```

## Lint
```sh
yarn lint

# auto fix
yarn lint --fix

# lint for git stage
yarn lint-staged
```

## Test
```sh
yarn test

# watch
yarn test --watch

# update snapshot
yarn test -u -t="{TargetName}"

# update snapshot all
yarn test -u

# coverage
yarn test --coverage
```

## Story Snapshot
```sh
yarn storyshots

# image snapshot (run while storybook running)
yarn puppeteer-storyshots

# update image snapshot (run while storybook running)
yarn puppeteer-storyshots -u -t="{TargetName}"

# update image snapshot all (run while storybook running)
yarn puppeteer-storyshots -u
```
