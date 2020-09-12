const {Router} = require('express')
const router = Router()
const nodemailer = require('nodemailer')
const sendgrid = require('nodemailer-sendgrid-transport')
const keys = require('../keys/keys')
const contactMail = require('../emails/contactEmail')

const transporter = nodemailer.createTransport(sendgrid({
  auth: {api_key: keys.sendgridAPI_KEY},
}))

router.post('/',  async (req, res) => {
  try {
    await transporter.sendMail(contactMail(req.body))
    res.json({success: true})
  } catch (e) {
    console.log(e)
  }
})

module.exports = router
