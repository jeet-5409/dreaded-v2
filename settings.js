/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY016Q0FNTVQyWVZkWHdJWU8yd093MEZnRVU3aTUvdnl0VnBtRmc0TTlVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieHhZZzJteWJ1MDhHR3hFNC9sR21lVVJHaVV0R3pJK0dXemFnYnJvU3Fpcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQWVWc2FhRVk4ZS84WnFuSGpBNHRQQzU5Z3BnZGkvSXNkNkJHdUROYjFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsM2F2aE9WdnNLdjJDWkhvME9pRjkvbVc2K1J3RU5Id1JrMjhnNG1CRVE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVNb3hpWWQ3Z2w5dGttbUdlTVdlbWl6SUlWeDVYRG9rRGxLS0w5blNSMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF6d012YWx2Nlp1TGs2eFZENzRoSUVvTkhoQjhMVG8yMUlkaDFaTDR1R2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU1CaUVQemxOK3UxeU9sNkxvTHFleUtFR3hZSlM5ZmxxR3pRb1M5Q25XYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1VJMmVXTU1pdGNrRjJmVUkwcXZkeG5sYWZFbUtYUjJrelJwYXlwREgwdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlV1QVViYjltNUpWeEFLRHVNOFM3cWJPekZzaE9ZcVJaKzVqOUZ4aDlwRjF1WFdUTmxPbmpJbW1QZWdEM0hNREg3ODhpYzdSNExpdG41cGp2RmZvQmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiI2TGZKTGdpM0Zxa0NKRHdHczYrbFRBVE9JYktuazBvRE10RVZxUk55SHdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTMzMDk1NDE5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRjNENTVGRkFDOUY1MkIyQTc1MDEzMENDOTNEMzI4QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM4NzU0NTQ3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTkzMzA5NTQxOTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMEU1QjlFMDYxMTNDRjNGNDRBOEQwNUI4MDBGNjE2OUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczODc1NDU0OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5MzMwOTU0MTkyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjRFREU3NUFGMUMzMUEyRkU5QkRERTcyMEIzMzNBRUQ1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzg3NTQ1NzF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxFb2luUVh2UkRhejhVc01GODhZb2ciLCJwaG9uZUlkIjoiNzI5NjZiMjktMzBjYS00YmY1LTlkYTYtYjJhMTE4ODZjNjc4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko2NmtkVGU0TEtBaHZZZzNQWi9ZdVhWQy8vYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPbXNCV0NsM3hBVjVZdUFrUzZKN2Iza1d6dDA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlBUNjJLNTkiLCJtZSI6eyJpZCI6IjkxOTMzMDk1NDE5MjozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJe4oCiXiBRX1VfRV9FX04gXuKAol4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0w2WThJb0dFTmlUamIwR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlJNUHJvdWNKN25lS1FTMW5nVkdWWU4xSk1hYmFwd1dQUmI1NWpDbU9hU0U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlRGKzZEdy9zM1A0RGI3TURQRE51T3ArZFRCcTZQU0ZESkhVNG1OL2M2Y09lc3lJdlZsTm5KMW83SVRDT3g5TUx1Wm1OWWMrczliL1dNVjJiRUZmUkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEY3dIeGdqUDJPZ3JtQ2JJMVJQVVFqZDVKQzNvMTZ3aWlDNDViMmkvSktjbFQ5T0ZkSnFtV0l4L2pDTmk0VlhycGo5UUlMOFRocnRUSEQ5d3lucUhqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTMzMDk1NDE5MjozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVVEQ2NkxuQ2U1M2lrRXRaNEZSbFdEZFNUR20ycWNGajBXK2VZd3BqbWtoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4NzU0NTM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9raCJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254114018035';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'QUEEN';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
