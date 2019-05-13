
import * as knex from "knex";
const conn: any = {
  connection  : {
    host      : '127.0.0.1',
    user      : 'root',
    password  : '',
    charset   : 'utf8',
  },
  client    : 'mysql',
};

const title: string = process.argv[2];
const flag: string = process.argv[3];

const run = async () => {
  if ((!title || !flag) || (flag !== "-c" && flag !== "-d")) {
    //${/*Please pass -c to create r -d to destroy database*/}
    console.log(`Invalid arguments. Ex. ts-node create_db.ts app -c`);
    process.exit(1);
  }

  const db = knex(conn);
  let command: string;
  if (flag === "-c") {
    console.log(`Creating Database ${title}`);
    command = `CREATE DATABASE \`${title}\`;`;
  } else {
    console.log(`Dropping Database ${title}`);
    command = `DROP DATABASE \`${title}\`;`;
  }
  await db.raw(command);
  console.log("OK THIS IS FINE I GUESS");
  db.destroy();
  process.exit(1);


}

run();

