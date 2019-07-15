import { Command, flags } from "@oclif/command"
import inquirer from "inquirer"
import core from "../api/core"

export default class Interact extends Command {
  static description = "Enter the interactive mode"

  async run() {
    const source = core.list()
    const choices = source
    const prompt: any = await inquirer.prompt([
      {
        type: "checkbox",
        message: "Update todo",
        name: "todos",
        choices: choices.map(todo => {
          //  the default checked value is determined by the status of todo
          return { name: todo.todo, checked: todo.done }
        }),
      },
    ])

    const finishedTodo = prompt.todos // list of todos selected by user
    source.forEach((todo, index) => {
      if (finishedTodo.indexOf(todo.todo) !== -1) {
        //  the todo is in the select list
        core.done(index)
      } else {
        //   the todo is not in the select list
        core.undone(index)
      }
    })
  }
}
