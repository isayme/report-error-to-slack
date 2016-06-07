var request = require('request-promise')

module.exports = function (hookurl) {
  function reporter (err) {
    return request({
      method: 'POST',
      uri: hookurl,
      body: {
        attachments: [{
          title: err.message,
          text: '```' + err.stack + '```',
          mrkdwn_in: ['text']
        }]
      },
      json: true,
      encoding: 'utf8'
    })
  }

  return reporter
}
