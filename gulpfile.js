const dotenv = require('dotenv');
const loadTasks = require('./gulp/load-tasks');

// load environment variables
dotenv.config();

loadTasks(require('./gulp/config'));
