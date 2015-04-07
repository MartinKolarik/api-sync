module.exports = {
  port: 8000,
  output: 'data',
  githubToken: '',
  logentriesToken: '',
  webhookSecret: '',
  smtp: {
    host: '',
    port: ''
  },
  smtpAuth: {
      user: '',
      pass: ''
  },
  smtpTo: {
    email: ''
  },
  smtpFrom: {
    email: ''
  },
  tasks: {
    bootstrap: {minute: 3},
    google: {minute: 3},
    cdnjs: {minute: 3},
    jsdelivr: {minute: 3}
    //jquery: {minute: 5}
  }
};
