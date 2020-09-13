const {Router} = require('express')
const router = Router()
const sgMail = require('@sendgrid/mail');
const keys = require('../keys/keys')

router.post('/',  async (req, res) => {
  try {
    sgMail.setApiKey(keys.sendgridAPI_KEY);
    const msg = {
      to: 'yevhenii.kolisnyk@gmail.com',
      from: 'kolesnikthebest@gmail.com',
      subject: req.body.subject,
      html: `
              <h1>Message from ${req.body.name}: ${req.body.email}</h1>
              <hr>    
              <p>${req.body.message}</p>    
              <hr>`
    };
    await sgMail.send(msg);
    res.json({success: true})
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
