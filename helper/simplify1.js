const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// returns array of column names for each row
async function check(tableName) {
  let checkField = await lib.airtable.query['@1.0.0'].select({
    table: tableName,
  });
  let checkKeys = checkField.rows.map((row) => Object.keys(row.fields));
  return checkKeys;
}

// returns object later used for the where parameter
async function checkWhereField(whereField, operation, whereValue) {
  let checkWhere = {};
  checkWhere[whereField + operation] = whereValue;
  console.log('checkWhere', checkWhere);
  return checkWhere;
}

async function checkWhereValue(whereValue) {
  if (isNaN(whereValue) || whereValue == '') {
    console.log(
      'You will have to enter a numerical value in the environment variable of process.env.WHERE_VALUE.'
    );
    return "error";
  }
}

async function checkWhere(whereField) {
  if (whereField == '') {
    console.log(
      'You will have to enter a pre-existing field in the environment variable of process.env.WHERE_FIELD.'
    );
    return "error";
  }
}

// first checks whether any of the values are blank
// then tries to check for table name
async function withTry(whereValue, whereField, tableName, operation) {
  try {
    await check(tableName);
  } catch (e) {
    // console.log(e);
    if (e.type == 'RuntimeError') {
      console.log(
        'You will have to enter a pre-existing table name or ID in the environment variable of process.env.TABLE_NAME.'
      );
      return "error";
    } 
  }
  try {
    await checkWhereField(whereField, operation, whereValue);
  } catch (e) {
    console.log(e);
    return "error";
  }
}
async function afterTry(tableName, resultField) {
  let checkKeys = await check(tableName);
  if (!checkKeys[0].includes(resultField)) {
    console.log(
      'You will have to enter a pre-existing field in the environment variable of process.env.RESULT_FIELD.'
    );
    return "error";
  }
}

module.exports = {check, withTry, afterTry, checkWhereField, checkWhereValue, checkWhere};
