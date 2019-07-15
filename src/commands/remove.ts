import { Command, flags } from "@oclif/command"
import chalk from "chalk"
import core from "../api/core"

export default class Remove extends Command {
  static description = "Remove a todo from list"

  static flags = {
    help: flags.help({ char: "h" }),
  }

  static args = [{ name: "index" }]

  async run() {
    const { args, flags } = this.parse(Remove)

    const { index } = args
    if (index) {
      const { todo } = core.get(index)
      core.remove(index)
      this.log(`${chalk.green("[Success]")} Removed todo: ${todo}`)
    } else {
      this.error(chalk.red("please specify the todo's index"))
    }
  }
}
