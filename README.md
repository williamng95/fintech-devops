# fintech-devops

## Automated webpage deployment

[Live Site](https://williamng95.github.io/fintech-devops/)

upon checks passing in dev branch (triggered by pull request/push), the following should happen:
- source code is merged from `dev` to `main` 
- code on `main` is deployed to `gh-pages` as live site

credits:

https://github.com/tschaub/gh-pages/issues/345

https://github.com/tschaub/gh-pages

https://create-react-app.dev/docs/deployment/#github-pages

TODO:

- [X] trigger auto deploy from `main`
- [ ] trigger auto merge from `dev`
- [ ] check full flow
- [ ] prettify page :tada:
