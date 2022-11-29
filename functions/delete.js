const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const simplify = require('./../helper/simplify1');

let result = 0;
switch (result) {
  case 0: {
    let w = await simplify.withTry(
      process.env.WHERE_VALUE,
      process.env.WHERE_FIELD,
      process.env.TABLE_NAME,
      '__gt'
    );
    if (w != undefined) {
      return;
    }
  }
  case 1: {
    let checkWhere = await simplify.checkWhereField(
      process.env.WHERE_FIELD,
      '__gt',
      process.env.WHERE_VALUE
    );
    let d = await lib.airtable.query['@1.0.0'].delete({
      table: process.env.TABLE_NAME,
      where: [checkWhere],
    });
    let log = 'You have removed: \n';
    let fields, num, key, value;
    for (let removed of d.rows) {
      log = log + '{'
      fields = removed.fields;
      key = Object.keys(fields);
      key.forEach(k => log = log + k.toString() + ': ' + fields[k].toString() + ',\n');
      log = log.slice(0, -2) + '}\n'
    }
    return console.log(
      log + ` from ` + d.table
    );
  }
}
