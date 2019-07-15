import chalk from "chalk"
import fs from "fs"
import path from "path"
import low from "lowdb"
import uuid from "uuidv4"
import FileSync from "lowdb/adapters/FileSync"

const DEFAULT_STORAGE_LOCATION = `${process.env.HOME}/.checkme`

export interface Todo {
  id: string
  done: boolean
  todo: string
  added: Date
}

class Core {
  private todos: Todo[]
  private db: any

  constructor() {
    //  setup storage folder
    const cwd = path.resolve(DEFAULT_STORAGE_LOCATION)
    if (!fs.existsSync(cwd)) {
      console.log(chalk.yellowBright(`Setting up core api`))
      fs.mkdirSync(cwd)
    }
    // Setup lowdb database
    const adapter = new FileSync(path.resolve(cwd, "__db.json"))
    this.db = low(adapter)
    this.db.defaults({ todos: [] }).write()
    this.todos = this.db.get("todos").value()
  }

  private saveTodos = () => {
    this.db.set("todos", this.todos).write()
  }

  add = (todo: string, done: boolean = false) => {
    const newTodo: Todo = { done, todo, added: new Date(), id: uuid() }
    this.todos.push(newTodo)
    this.saveTodos()
  }

  remove = (index: number) => {
    this.todos.slice(index, 1)
    this.saveTodos()
  }

  list = () => {
    return this.todos
  }

  get = (index: number) => {
    return this.todos[index]
  }

  done = (index: number) => {
    this.todos[index].done = true
    this.saveTodos()
  }

  undone = (index: number) => {
    this.todos[index].done = false
    this.saveTodos()
  }
}

const api = new Core()
export default api
