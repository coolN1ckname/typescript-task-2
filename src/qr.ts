import * as QRCode from 'qrcode';

export async function generateQRCode(text: string, size: number): Promise<string> {
  if (!text) {
    throw new Error("Ошибка: Укажите текст или ссылку");
  }

  try {
    return await QRCode.toString(text, { type: 'terminal', version: size, small: true });
  } catch (error) {
    throw new Error("Ошибка при генерации QR-кода");
  }
}

