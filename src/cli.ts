import { Command } from 'commander';
import { generateQRCode } from './qr';

const program = new Command();

program
  .name('qr-cli')
  .description('Генератор QR-кодов для терминала')
  .version('1.0.0');

program
  .configureOutput({
    outputError: (str) => {
      if (str.includes("missing required argument 'text'")) {
        console.error("Ошибка: Укажите текст или ссылку");
      } 
      process.exit(1);
    }
  });

program
  .command('generate <text>')
  .description('Создать QR-код из текста')
  .option('--size <number>', 'Размер QR-кода', '8')
  .action(async (text, options) => {
    try {
      const qr = await generateQRCode(text, Number(options.size));
      console.log(qr);
    } catch (error) {
      console.error("Ошибка генерации QR-кода:", error);
    }
  });

program.parse(process.argv);

//вывод работает только с "-- --size". Если оставить только "--size", то выдаст ошибку нескольких аргументов