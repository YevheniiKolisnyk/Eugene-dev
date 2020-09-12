const keys = require('../keys/keys')

module.exports =  function ({name, email, subject, message}) {
  return {
    to: 'yevhenii.kolisnyk@gmail.com',
    from: keys.emailFrom,
    subject,
    html: `
    <h1>Message from ${name}: ${email}</h1>
    <hr>
    <p>${message}</p>
    <hr>
   `
  }
}

