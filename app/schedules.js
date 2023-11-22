const db = require('./db.server.js')

async function dbUpdateRecord(){
        let currentTime = new Date();
        const user = await db.updates.create({
                data: {
                  updated: `${currentTime}`,
                },
              })
        return user
}

module.exports.eat_breakfast = async function()
{
        const word = await dbUpdateRecord();
        console.log('Eating breakfast...');
        console.log('word: ',  word)
        console.log('done.');
}

require('make-runnable');


