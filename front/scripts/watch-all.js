// scripts/watch-all.js
// 複数のtsc --watchを並列起動するスクリプト
const { spawn } = require('child_process');

const fs = require('fs');
const path = require('path');


function findTsconfigs(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findTsconfigs(filePath));
    } else if (file === 'tsconfig.json' && (filePath.includes('/src/') || filePath.includes('app/templates/tsconfig.json'))) {
      // src配下またはapp/templates直下のtsconfig.jsonも対象
      results.push(path.relative(process.cwd(), filePath));
    }
  });
  return results;
}

const rootDir = process.cwd();
const watchTargets = findTsconfigs(rootDir);

if (watchTargets.length === 0) {
  console.log('No src/tsconfig.json found.');
  process.exit(0);
}

console.log('Watching the following tsconfig.json files:');
watchTargets.forEach(t => console.log('  ' + t));

watchTargets.forEach(tsconfig => {
  const proc = spawn('npx', ['tsc', '--project', tsconfig, '--watch'], {
    stdio: 'inherit',
    shell: true
  });
  proc.on('close', code => {
    console.log(`[watch] ${tsconfig} exited with code ${code}`);
  });
});
