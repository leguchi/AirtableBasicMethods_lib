const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const simplify = require('./../helper/simplify1');

let result = 0;
switch (result) {
  case 0: {
    let w = await simplify.withTry(process.env.WHERE_VALUE, process.env.WHERE_FIELD, process.env.TABLE_NAME, '__gt');
    if (w != undefined) {
      return;
    }
  } case 1: {
    let checkWhere = await simplify.checkWhereField(process.env.WHERE_FIELD, '__gt', process.env.WHERE_VALUE);
    let countNum = await lib.airtable.query['@1.0.0'].count({
          table: process.env.TABLE_NAME,
          where: [checkWhere],
        });
    return console.log(
      'The number of records in ' + countNum.table + ' is ' + countNum.count
    );
  }
}
