/* eslint-env node */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = path.resolve(__dirname, '..');

function walk(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === 'dist') continue;
      walk(full, files);
    } else if (/\.(js|jsx|ts|tsx)$/.test(e.name)) {
      files.push(full);
    }
  }
  return files;
}

function normalize(p) {
  return p.replace(/\\/g, '/');
}

function findFileCaseSensitive(importPath, importerDir) {
  const resolved = path.resolve(importerDir, importPath);

  // Try with extensions
  const candidates = [];
  const exts = [
    '',
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '/index.js',
    '/index.jsx',
    '/index.ts',
    '/index.tsx',
  ];
  for (const e of exts) candidates.push(resolved + e);

  for (const c of candidates) {
    if (fs.existsSync(c)) {
      // check casing by walking from root of project to file
      const rel = path.relative(root, c);
      const parts = rel.split(path.sep);
      let cur = root;
      let ok = true;
      for (const p of parts) {
        const list = fs.readdirSync(cur);
        if (!list.includes(p)) {
          ok = false;
          break;
        }
        cur = path.join(cur, p);
      }
      if (!ok) {
        return { found: true, real: normalize(c) };
      } else {
        return { found: true, real: normalize(c) };
      }
    }
  }
  return { found: false };
}

const files = walk(path.join(root, 'src'));
const importRegex = /import\s+(?:[^'";]+)\s+from\s+['"](.+)['"];?/g;

let problems = [];

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = importRegex.exec(src))) {
    const imp = m[1];
    if (imp.startsWith('.')) {
      const importerDir = path.dirname(file);
      const res = findFileCaseSensitive(imp, importerDir);
      if (!res.found) {
        problems.push({
          file: normalize(file),
          import: imp,
          issue: 'not found',
        });
      }
    }
  }
}

if (problems.length === 0) {
  console.log('No local import resolution issues found.');
} else {
  console.log('Import resolution issues:');
  for (const p of problems)
    console.log(p.file + ' -> ' + p.import + ' : ' + p.issue);
  throw new Error('Import resolution problems found');
}
