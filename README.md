# TEAM PROFILE GENERATOR

Team Profile Generator is an application that allows a development manager to add details about themselves and their engineering team to the end of an auto-generated HTML page that the manager can review as they need.  In addition, this team profile generator app uses JEST for a series of tests.

## Installation

The packages used are as follow:
1.  inquirer    (https://www.npmjs.com/package/inquirer)
    - install command (bash):  'npm i inquirer'
2.  jest        (https://www.npmjs.com/package/jest)
    - install command (bash):  'npm i --save-dev jest'
3.  create-html (https://www.npmjs.com/package/create-html)
    - install command (bash):  'npm i create-html'
4.  fs          (https://www.npmjs.com/package/fs)
    - install command (bash):  none.  Auto-installed with node.js

Steps to initialize and prep the application (bash):
1.  npm init -y
2.  npm i inquirer
3.  npm i create-html
4.  npm i --save-dev jest
5.  update package.json
    from:   "scripts": {"test": "<whatever is here>"}
    to:     "scripts": {"test": "jest"}

## Execute Application

(bash) node index.js

## Testing Application

(bash) npm test

## Instructional video

https://macktrain.github.io/sandlot-week10/instruction.mp4

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
none