#!/usr/bin/env node
const fs = require('fs')
const { exit } = require('process')

const name = process.argv[2]
const score = process.argv[3]
const file = 'tools.json'

fs.readFile(file, {encoding: 'utf-8'}, (err, data) => {
    err && exit(1) 
    const tools = JSON.parse(data)
    tools.push({name: name, score: score})

fs.writeFile(file, JSON.stringify(tools), {encoding: 'utf-8'}, err => {
    exit(err ? 1 : 0)
})
})