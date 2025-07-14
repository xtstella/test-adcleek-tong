const db = require('./database');

async function initialize() {
  return new Promise((resolve, reject) => {
    try {
      db.init();
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = { initialize };