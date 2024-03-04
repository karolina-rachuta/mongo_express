import MongoClient from 'mongodb';

export const runAssertions = async (students = [], mappedResults = []) => {
  console.assert(mappedResults && mappedResults.length,
    'Should have more than 0 mapped results', mappedResults);
  console.assert(students && students.length,
    'Should have more than 0 students', students);

  for (let student of students) {
    console.assert(student && student.exams && student.exams.length === 3,
      `Should have 3 exam results - ${student && student.firstName} ${student && student.lastName}`,
      student && student.exams);
  }

  const piotrExams = mappedResults.find(result =>
    result._id && result._id.equals('345345345345345345345345'));
  console.assert(piotrExams, 'Should have exam results for Piotr', piotrExams);
  console.assert(piotrExams && piotrExams.mean === 54, 'Should have mean result of 54', piotrExams);
};
