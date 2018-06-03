const {
  issueOpened
} = require('./issues.resolvers');

module.exports = (robot) => {
  robot.on('issues.opened', async context => {
    return await issueOpened(context);
  });
}
