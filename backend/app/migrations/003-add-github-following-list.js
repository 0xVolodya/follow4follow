import db from '../db'

module.exports = async function () {
  await addGithubField()
}

async function addGithubField () {
  const queryInsertId = '\n' +
    'ALTER TABLE users\n' +
    'ADD IF NOT EXISTS github_login VARCHAR(100) '

  const queryInsertFollowing = '\n' +
    'ALTER TABLE users\n' +
    'ADD IF NOT EXISTS github_following  text[]'

  await db.query(queryInsertId)
  await db.query(queryInsertFollowing)
}
