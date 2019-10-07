
export const port  = Number(process.env.PORT) || 8500;

export const EMAIL_SETTINGS = {
  host  : 'smtp.office365.com',
  secure: false,
  port  : 587, 
  tls   : {ciphers : 'SSLv3'},
  auth  : {
    user  : process.env.USERNAME || '',//username
    pass  : process.env.PASSWORD || '',//password
  },
  pool: true,
  maxConnections: 3
};

