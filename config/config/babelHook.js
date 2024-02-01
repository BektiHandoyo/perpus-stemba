
// require('babel-core/register');
import 'babel-core/register.js'
import * as dotenv from 'dotenv'
import * as config from './config.js'
dotenv.config()


export default config.default[process.env.NODE_ENV];
