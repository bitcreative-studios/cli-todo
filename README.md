cli-todo
========

Just another todo app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/cli-todo.svg)](https://npmjs.org/package/cli-todo)
[![CircleCI](https://circleci.com/gh/bitwhys/checkme-todo/tree/master.svg?style=shield)](https://circleci.com/gh/bitwhys/checkme-todo/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/cli-todo.svg)](https://npmjs.org/package/cli-todo)
[![License](https://img.shields.io/npm/l/cli-todo.svg)](https://github.com/bitwhys/checkme-todo/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @bitwhys/cli-todo
$ checkme COMMAND
running command...
$ checkme (-v|--version|version)
@bitwhys/cli-todo/1.0.0 linux-x64 node-v12.4.0
$ checkme --help [COMMAND]
USAGE
  $ checkme COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`checkme add [TODO]`](#checkme-add-todo)
* [`checkme help [COMMAND]`](#checkme-help-command)
* [`checkme interact [FILE]`](#checkme-interact-file)
* [`checkme list`](#checkme-list)
* [`checkme remove [INDEX]`](#checkme-remove-index)

## `checkme add [TODO]`

Add new todo to list

```
USAGE
  $ checkme add [TODO]

OPTIONS
  -d, --done
```

_See code: [src/commands/add.ts](https://github.com/learning-nodejs/checkme/blob/v1.0.0/src/commands/add.ts)_

## `checkme help [COMMAND]`

display help for checkme

```
USAGE
  $ checkme help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_

## `checkme interact [FILE]`

describe the command here

```
USAGE
  $ checkme interact [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/interact.ts](https://github.com/learning-nodejs/checkme/blob/v1.0.0/src/commands/interact.ts)_

## `checkme list`

Print out all todos

```
USAGE
  $ checkme list

OPTIONS
  -d, --done  list only your completed task
  -h, --help  show CLI help
```

_See code: [src/commands/list.ts](https://github.com/learning-nodejs/checkme/blob/v1.0.0/src/commands/list.ts)_

## `checkme remove [INDEX]`

Remove a todo from list

```
USAGE
  $ checkme remove [INDEX]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/learning-nodejs/checkme/blob/v1.0.0/src/commands/remove.ts)_
<!-- commandsstop -->
