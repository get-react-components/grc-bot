const { message } = require('./issues.messages');

function issueOpened(context) {
  const params = context.issue({
    body: message.opened
  });

  return context.github.issues.createComment(params);
}

module.exports = {
  issueOpened
}