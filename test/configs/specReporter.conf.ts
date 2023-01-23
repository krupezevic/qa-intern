import { config } from './wdio.conf';


module.exports = {
     ...config,
     path: "../../",
    reporters: ['spec'],
    // ...
  };

