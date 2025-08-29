const { spawn } = require('child_process');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

// src/tsconfig.json を再帰的に全て探す
function findTsconfigs(dir) {
  let results = [];
  for (const file of readdirSync(dir)) {
    const fullPath = join(dir, file);
    if (statSync(fullPath).isDirectory()) {
      results = results.concat(findTsconfigs(fullPath));
    } else if (file === 'tsconfig.json' && /\/src\//.test(fullPath)) {
      results.push(fullPath);
    }
  }
  return results;
}

const baseDir = process.cwd();
const tsconfigs = findTsconfigs(baseDir);

if (tsconfigs.length === 0) {
  console.log('No src/tsconfig.json found.');
  process.exit(0);
}

console.log('Watching the following tsconfig.json files:');
tsconfigs.forEach(cfg => console.log('  ' + cfg));

const children = tsconfigs.map(cfg => {
  return spawn('npx', ['tsc', '--project', cfg, '--watch'], {
    stdio: 'inherit',
    shell: true
  });
});

process.on('SIGINT', () => {
  children.forEach(child => child.kill('SIGINT'));
  process.exit();
});
