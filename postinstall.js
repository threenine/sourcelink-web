require('dotenv').config();
const pack = require('./package.json');
const fs = require('fs');

let currentString = pack.dependencies["mdbvue"];

pack.dependencies["mdbvue"] = pack.dependencies["mdbvue"]
    .replace(currentString, "git+https://oauth2:{MDB_VUE_PRO_ID}@git.mdbootstrap.com/mdb/vue/vu-pro.git");

fs.writeFileSync('package.json', JSON.stringify(pack, null, 4));
