import { Command, flags } from "@oclif/command"
import chalk from "chalk"
import core from "../api/core"

export default class Add extends Command {
  static description = "Add new todo to list"

  static flags = {
    done: flags.boolean({ char: "d" }),
  }

  static args = [{ name: "todo" }]

  async run() {
    const { args, flags } = this.parse(Add)
    const { todo } = args
    const { done } = flags

    if (todo) {
      if (done) {
        core.add(todo, true)
      } else {
        core.add(todo)
      }
      this.log(`${chalk.green("[Success]")} Added new todo: ${todo}`)
    } else {
      this.error(chalk.red("please specify the new todo"))
    }
  }
}
