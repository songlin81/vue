# vue
 vue with circleCI

## Initialization
- % npm init
- create .gitignore, add 'node_modules/'
- % npm install --save-dev jest
- add to package.json: "test": "jest"
- % npm install --save-dev jest-junit

## Local
- % npm run test

## Git
- % git add .
- % git status
- % git commit -am "init check in"
- % git remote set-url origin https://songlin81:password@github.com/songlin81/vue.git
- % git push -u origin master

## CircleCI
- Log in with GitHub, and setup project

## Pull request
- % git branch -a
- % git branch -d circleci-project-setup
- % git checkout -b colab
- Comment off test "add VAT tax rate 15% to original price"
- % git push -u origin colab
- Raise 'Pull Request' and 'All checks have failed' will be observed by CircleCI, therefore 'Close pull request'