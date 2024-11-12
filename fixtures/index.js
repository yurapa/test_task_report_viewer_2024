const fs = require('fs');
const path = require('path');

module.exports = () => {
  const reportsDir = path.join(__dirname, 'data/reports');
  const reportFiles = fs.readdirSync(reportsDir);
  const report = reportFiles.map((file) => {
    const id = path.basename(file, '.json');
    const details = require(path.join(reportsDir, file));
    return { id, ...details };
  });

  const list = require('./data/reports.json');

  return {
    list,
    report,
  };
};
