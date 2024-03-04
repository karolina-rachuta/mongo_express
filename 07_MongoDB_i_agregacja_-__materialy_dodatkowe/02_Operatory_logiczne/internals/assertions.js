export const runAssertions = async (data = []) => {
  console.assert(data.length === 15, 'Should have length of 15', data.length);

  const passedUsers = data.filter(user => user.passed);
  console.assert(passedUsers.length === 6, 'Should have 6 users that passed', passedUsers.length);

  const firsPassedUser = passedUsers[0] || {};
  console.assert(firsPassedUser.totalSum === 804, 'First passed user should have points', firsPassedUser);

  const lastPassedUser = passedUsers[5] || {};
  console.assert(lastPassedUser.totalSum === 805, 'First passed user should have points', lastPassedUser);
};
