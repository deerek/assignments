var readlineSync = require('readline-sync')

actions = ['Stick your hand in this hole', 'Find the key', 'Open the damn door'],
index = readlineSync.keyInSelect(actions, 'What do you want to do?');
