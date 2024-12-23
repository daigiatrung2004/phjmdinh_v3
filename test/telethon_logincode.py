from telethon import TelegramClient, events

api_id = 'your_api_id'
api_hash = 'your_api_hash'
session_str = 'your_session_string'

client = TelegramClient(StringSession(session_str), api_id, api_hash)

@client.on(events.NewMessage)
async def handler(event):
    if 'login code' in event.message.message:
        code = event.message.message.split()[-1]
        print(f'Login code: {code}')

client.start()
client.run_until_disconnected()
