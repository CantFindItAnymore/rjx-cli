#! /usr/bin/env node

// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js 实现修改

// 用于检查入口文件是否正常执行
console.log('rjx-cli is working!')

const inquirer = require('inquirer')

inquirer
	.prompt([
		{
			type: 'input', //type： input, number, confirm, list, checkbox ...
			name: 'name', // key 名
			message: 'your project name', // 提示信息
			default: 'rjx-cli', // 默认值
		},
	])
	.then(answers => {
		// 打印互用输入结果
		console.log(answers)
	})
