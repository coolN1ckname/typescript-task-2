import { Command } from 'commander';

const program = new Command();

program
  .name('qr-cli')
  .description('Генератор QR-кодов для терминала')
  .version('1.0.0');

// дополните объект program

program.parse(process.argv);