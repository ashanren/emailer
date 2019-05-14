
export const port  = 8500;

export const EMAIL_SETTINGS = {
  host  : 'smtp.office365.com',
  secure: false,
  port  : 587, 
  tls   : {ciphers : 'SSLv3'},
  auth  : {
    user  : 'alert@talkpathlive.com',//username
    pass  : 'hifgix-1zofqo-jTpay1',//password
  },
  pool: true,
  maxConnections: 3
};

