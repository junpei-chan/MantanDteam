const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");


// ビルド対象ディレクトリを列挙
const buildTargets = [
  // app/templates配下
  path.resolve(__dirname, '../app/templates/start'),
  // components配下
  path.resolve(__dirname, '../components/features/start/lang-switch-menu')
];

buildTargets.forEach(baseDir => {
  const srcPath = path.join(baseDir, 'src');
  const distPath = path.join(baseDir, 'dist');

  // TypeScriptビルド
  const tsconfigPath = path.join(srcPath, 'tsconfig.json');
  if (fs.existsSync(tsconfigPath)) {
    try {
      execSync(`npx tsc --project ${tsconfigPath}`, { stdio: 'inherit' });
      console.log(`[TS] build: ${tsconfigPath}`);
    } catch (e) {
      console.error(`[TS ERROR] ${tsconfigPath}`);
    }
  }

  // Sassビルド
  if (fs.existsSync(srcPath)) {
    try {
      execSync(`npx sass ${srcPath}:${distPath}`, { stdio: 'inherit' });
      console.log(`[SASS] ${srcPath} → ${distPath}`);
    } catch (e) {
      console.error(`[SASS ERROR] ${srcPath} → ${distPath}`);
    }
  }
});

console.log('ビルド完了');
