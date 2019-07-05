# git-fcm ![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/ambus/gfc.svg)

>git formatted commit message

>Tool for executing a git commit with a defined template. 
>All commits in the repository will have the same structure.

## Install

### As `npm run` script

Install and add to `devDependencies`:
npm:
```bash
$ npm install --save-dev git-fcm
```

or yarn:
```bash
$ yarn add -D git-fcm
```

Add an [`npm run` script](https://docs.npmjs.com/cli/run-script) to your _package.json_:

```json
{
  "scripts": {
    "commit": "git-fcm"
  }
}
```

Now you can use `npm run commit`.

### As global bin

Install globally (add to your `PATH`):

npm:
```
npm i -g git-fcm
```
or yarn:
```bash
$ yarn global add git-fcm
```

Now you can use `git-fcm` on any repo/package without adding a dev dependency to each one and without command `npm run`.

## Commit Template

Insert template into `.gfc.json` file.

Structure:
```json
{
    "templateLines": [ //TemplateLine[]. Array of template lines
        {
            "description": "", //Description of line
            "lineFields": [ //fields on the line 
                {
                    "name": "", //name of field
                    "type": "",  //one of type: text, select, constText
                    "textBefore": "",   //text added at the beginning of field
                    "textAfter": "",    //text added at the end of field
                    "question": "",     //question to display
                    "description": "",  //description
                    "data": {},         //currently not use, not required
                    "minLength": 0,     //Min length of input text, not required
                    "maxLength": 0      //Max length of input text, not required
                }//,{...}
            ],
            "startString": "", //text added at the beginning of the line. not required
            "endString": ""//text added at the end of the line. not required
        }//,{...}
    ]
}
```

Example template:
```json
{
    "templateLines": [
        {
            "description": "subject",
            "lineFields": [
                {
                    "name": "type",
                    "type": "select",
                    "textBefore": "",
                    "textAfter": "",
                    "question": "Commit type:",
                    "description": "",
                    "data": [
                        "fix",
                        "feat",
                        "build",
                        "ci",
                        "docs",
                        "perf",
                        "refactor",
                        "style",
                        "test"
                    ]
                },
                {
                    "name": "scope",
                    "type": "text",
                    "textBefore": "(",
                    "textAfter": "):",
                    "question": "Scope:",
                    "description": "Scope of affected module.",
                    "data": []
                },
                {
                    "name": "message",
                    "type": "text",
                    "textBefore": " ",
                    "textAfter": "",
                    "question": "Commit message:",
                    "description": "Message of commit",
                    "data": []
                }
            ]
        },
        {
            "description": "body",
            "startString": "\r\n\r\n",
            "lineFields": [
                {
                    "name": "description",
                    "type": "text",
                    "textBefore": "",
                    "textAfter": "",
                    "question": "Description:",
                    "description": "Just as in the subject, use the imperative, present tense: 'change' not 'changed' nor 'changes'.\nThe body should include the motivation for the change and contrast this with previous behavior.",
                    "data": []
                }
            ]
        },
        {
            "description": "footer",
            "startString": "\r\n\r\n",
            "lineFields": [
                {
                    "name": "description",
                    "type": "text",
                    "textBefore": "",
                    "textAfter": "",
                    "question": "Footer:",
                    "description": "The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes. \nBreaking Changes should start with the word BREAKING CHANGE: with a space or two newlines. \nThe rest of the commit message is then used for this.",
                    "data": []
                }
            ]
        }
    ]
}
```


### TODO

- [x] print logo
- [X] load template
- [X] select input
- [X] standard input
- [X] build commit
- [X] add description line
- [X] add task id line
- [X] call git commit
- [X] build bin
- [X] update Readme file - add info how to use this tools and template example
- [X] add default template
- [x] minimal and maximum number of characters 
- [ ] npm publish
- [ ] add ctrl+c or ESC to cancel
- [ ] multiline text
- [ ] describe all possible fields appearing in the template
- ... more

### Dependencies

https://github.com/anseki/readline-sync - synchronous Readline
https://github.com/sindresorhus/ora - terminal spiner
https://github.com/chalk/chalk - text styling
https://github.com/bokub/gradient-string - text with gradient
https://github.com/reactivex/rxjs - a reactive programming library for JavaScript
https://github.com/steveukx/git-js - interface for running git commands

#### Future dependencies
https://github.com/drew-y/cliffy - CLI

### Stats

#### GitHub commit activity

![GitHub last commit](https://img.shields.io/github/last-commit/ambus/gfc.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/ambus/gfc.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/ambus/gfc.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/ambus/gfc.svg)

#### File Size

![GitHub repo size](https://img.shields.io/github/repo-size/ambus/gfc.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ambus/gfc.svg)
