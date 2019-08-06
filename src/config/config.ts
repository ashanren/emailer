
export const port  = 4500;

export const EMAIL_SETTINGS = {
  host  : 'smtp.office365.com',
  secure: false,
  port  : 587, 
  tls   : {ciphers : 'SSLv3'},
  auth  : {
    user  : process.env.email_user || '',//username
    pass  : process.env.email_pass || '',//password
  },
  pool: true,
  maxConnections: 3
};

