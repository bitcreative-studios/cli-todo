import { Command, flags } from "@oclif/command"
import chalk from "chalk"
import Table from "cli-table"
import core, { Todo } from "../api/core"
import base = Mocha.reporters.base

export default class List extends Command {
  static description = "Print out all todos"

  static flags = {
    help: flags.help({ char: "h" }),
    done: flags.boolean({
      char: "d",
      description: "list only your completed task",
    }),
  }
  completed = (todos: Todo[]): Table => {
    const table = new Table({
      head: [
        chalk.blueBright("id"),
        chalk.blueBright("todo"),
        chalk.blueBright("finished"),
      ],
    })
    for (let todo of todos) {
      const status = todo.done ? chalk.green("done") : chalk.red("not done")
      table.push([todo.id, todo.todo, status])
    }
    return table
  }

  basic = (todos: Todo[]): Table => {
    const table = new Table({
      head: [
        chalk.blueBright("added"),
        chalk.blueBright("todo"),
        chalk.blueBright("status"),
      ],
    })
    for (let todo of todos) {
      const status = todo.done ? chalk.green("done") : chalk.red("not done")
      table.push([todo.added, todo.todo, status])
    }
    return table
  }

  async run() {
    const { flags } = this.parse(List)
    const todos = core.list()
    let table
    if (flags.done) {
      table = this.completed(todos.filter(({ done }) => done))
    } else {
      table = this.basic(todos)
    }
    this.log(table.toString())
  }
}
