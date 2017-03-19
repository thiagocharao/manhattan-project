# manhattan-project

## Install Node
**TODO - We need to create a DevEnv (Docker, Vagrant, whatever...) for this, to avoid installing stuff locally.**

`brew install node`

## Clone this repo
`git clone https://github.com/thiagocharao/manhattan-project`

## Install dev dependencies
`npm install --only=dev`

## Run tests to make sure everything is set up
`npm test`

## After commiting, before git pushing
`npm version patch` increments 0.0.1

`npm version minor` increments 0.1.0

`npm major minor` increments 1.0.0

## git pushing
`git push origin master --tags`