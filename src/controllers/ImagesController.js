const { sendMail } = require('../services/Mailer');
const CONSTANT = require('../common/constant');

class ImagesController {
  async create(req, res) {
    const body = req.body || {};
    if (!body.image) {
      res.status(400).json({message: CONSTANT.MESSAGES.MISSING_PARAMS });
    }
    await sendMail({
      subject: 'Your Uploaded Photo is Here!',
      to: 'sahilbathla1@gmail.com',
      html: `There, you go enjoy your photo!<br><img src="${body.image}" />`,
    });
    res.json({message: CONSTANT.MESSAGES.IMAGES.SUCCESSFULLY_EMAILED });
  }
}

module.exports = ImagesController;
