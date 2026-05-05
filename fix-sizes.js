const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<Image') && content.includes('fill') && !content.includes('sizes=')) {
      content = content.replace(/fill(\s*)$/gm, 'fill sizes="100vw"$1');
      content = content.replace(/fill /g, 'fill sizes="100vw" ');
      content = content.replace(/fill\n/g, 'fill sizes="100vw"\n');
      
      fs.writeFileSync(filePath, content);
      console.log('Fixed:', filePath);
    }
  }
});
