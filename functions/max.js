const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const simplify = require('./../helper/simplify1');

let result = 0;
switch (result) {
  case 0: {
    let cwv = await simplify.checkWhereValue(process.env.WHERE_VALUE);
    if (cwv != undefined) {
      return;
    }
  } case 1: {
    let cw = await simplify.checkWhere(process.env.WHERE_FIELD);
    if (cw != undefined) {
      return;
    }
  }
  case 2: {
    let w = await simplify.withTry(process.env.WHERE_VALUE, process.env.WHERE_FIELD, process.env.TABLE_NAME, '__gt');
    if (w != undefined) {
      return;
    }
  } case 3: {
    let a = await simplify.afterTry(process.env.TABLE_NAME, process.env.RESULT_FIELD);
    if (a != undefined) {
      return;
    }
  } case 4: {
    let checkWhere = await simplify.checkWhereField(process.env.WHERE_FIELD, '__gt', process.env.WHERE_VALUE);
    let maxNum = await lib.airtable.query['@1.0.0'].max({
      table: process.env.TABLE_NAME,
      where: [checkWhere],
      field: process.env.RESULT_FIELD,
    });
    return console.log(
      'The largest number of ' + maxNum.max.field + ' is ' + maxNum.max.max
    );
  }
}
