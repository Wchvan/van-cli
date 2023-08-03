#! /usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

// 配置创建命令
program
    // 定义命令和参数
    .command('create <app-name>')
    .description('inspect and modify the config')
    .option('-f, --force', 'overwrite target directory if it exist')
    .action((name, options) => {
        require('../lib/create.js')(name, options)
    })

// 配置 config 命令
program
  .command('config [value]')
  .description('inspect and modify the config')
  .option('-g, --get <path>', 'get value from option')
  .option('-s, --set <path> <value>')
  .option('-d, --delete <path>', 'delete option from config')
  .action((value, options) => {
    console.log(value, options)
  })

// 配置 ui 命令
program
  .command('ui')
  .description('start add open van-cli ui')
  .option('-p, --port <port>', 'Port used for the UI Server')
  .action((option) => {
    console.log(option)
  })

program
  // 监听 --help 执行
  .on('--help', () => {
    // 使用 figlet 绘制 Logo
    console.log('\r\n' + figlet.textSync('Van Lucia', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 120,
      whitespaceBreak: true
    }));

    // 新增说明信息
    console.log(`\r\nRun ${chalk.cyan(`van <command> --help`)} for detailed usage of given command\r\n`)
  })

program
    // 配置版本号信息
    .version(`v${require('../package.json').version}`)
    .usage('<command> [option]')

program.parse(process.argv)