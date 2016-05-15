// converts sketch svg export to react logic node object

import xml2js from 'xml2js'
import fs from 'fs'
import util from 'util'

let parseString = xml2js.parseString
let svg = fs.readFileSync('./client/assets/circuit.svg').toString();

parseString(svg, function (err, result) {
 	console.log(util.inspect(result, false, null))
});