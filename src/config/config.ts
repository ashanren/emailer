
export const port  = 4500;

export const EMAIL_SETTINGS = {
  host  : 'smtp.office365.com',
  secure: false,
  port  : 587, 
  tls   : {ciphers : 'SSLv3'},
  auth  : {
    user  : '',//username
    pass  : '',//password
  },
  pool: true,
  maxConnections: 3
};

