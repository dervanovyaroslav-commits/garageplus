interface TelegramMessage {
  chat_id: string;
  text: string;
  parse_mode?: string;
}

const TELEGRAM_BOT_TOKEN = '7261773852:AAF7266b-PxNFWM7s3kl1sABqDRmLU_sAOI';
const TELEGRAM_CHAT_ID = '-1002759007086'; // Add your chat ID here

export async function sendTelegramMessage(message: string): Promise<boolean> {
  try {
    if (!TELEGRAM_CHAT_ID) {
      console.error('Telegram chat ID is not configured');
      return false;
    }

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const data: TelegramMessage = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    };
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Failed to send Telegram message:', error);
    return false;
  }
}

export function formatContactFormMessage(name: string, phone: string, comment?: string): string {
  return `
<b>Новая заявка</b>

<b>Имя:</b> ${name}
<b>Телефон:</b> ${phone}
${comment ? `<b>Комментарий:</b> ${comment}` : ''}
  `.trim();
}