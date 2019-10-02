require('dotenv').config();
const pack = require('./package.json');
const fs = require('fs');

pack.dependencies["mdbvue"] = pack.dependencies["mdbvue"]
    .replace("{MDB_VUE_PRO_ID}", process.env.MDB_VUE_PRO_ID);

fs.writeFileSync('package.json', JSON.stringify(pack, null, 4));
