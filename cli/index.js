#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the template payload shipped in the NPM package
const TEMPLATE_DIR = path.resolve(__dirname, '../template');
const TARGET_DIR = process.cwd();

async function main() {
  console.log(chalk.bold.magenta('\n=== SYNTHAI: Personal OS Initializer ===\n'));
  
  if (!fs.existsSync(TEMPLATE_DIR)) {
    console.error(chalk.red('Installation corruption: Cannot find template payload.'));
    process.exit(1);
  }

  console.log(chalk.gray(`Scaffolding Personal OS into: ${TARGET_DIR}`));

  try {
    copyFolderSync(TEMPLATE_DIR, TARGET_DIR);
    const ledgers = [
      'profile', 'experience', 'resonate', 'strategise', 
      'operate', 'narrate', 'research', 'debate'
    ];
    
    ledgers.forEach(ledger => {
      const ledgerPath = path.join(TARGET_DIR, ledger);
      if (!fs.existsSync(ledgerPath)) {
        fs.mkdirSync(ledgerPath, { recursive: true });
      }
    });

    console.log(chalk.green('\n✅ Initialization Complete.'));
    console.log(chalk.cyan('\nNext Steps:'));
    console.log(`1. Ensure you have the ${chalk.bold('Antigravity')} agent running in this workspace.`);
    console.log(`2. Type ${chalk.bold('@[/profile]')} to begin establishing your baseline CORE identity.`);
    console.log(`3. Your results will automatically save to their respective root ledgers.\n`);
  } catch (e) {
    console.error(chalk.red('\nFailed to scaffold the Personal OS:'), e);
  }
}

function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    
    // Skip if it's already an existing populated .agent folder to prevent destructive overwriting of custom skills
    if (fs.existsSync(toPath) && fs.statSync(toPath).isDirectory() && element === '.agent') {
      copyFolderSync(fromPath, toPath);
    } else {
      if (fs.lstatSync(fromPath).isFile()) {
        if (!fs.existsSync(toPath)) { // Non-destructive
          fs.copyFileSync(fromPath, toPath);
        }
      } else {
        copyFolderSync(fromPath, toPath);
      }
    }
  });
}

main();
