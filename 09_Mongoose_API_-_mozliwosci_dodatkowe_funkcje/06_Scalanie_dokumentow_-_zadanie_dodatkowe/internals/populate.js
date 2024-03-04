import MongoClient from 'mongodb';

import { connectToMongoose, dropCollection } from './connect';

export const examsCol = 'exams';
export const studentsCol = 'students';

const { ObjectID } = MongoClient;

const exams = [
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003e8'),
    result: 21,
    timeTaken: 80,
    questionsAnswered: 25
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003e9'),
    result: 71,
    timeTaken: 111,
    questionsAnswered: 13
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ea'),
    result: 66,
    timeTaken: 84,
    questionsAnswered: 24
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003eb'),
    result: 69,
    timeTaken: 92,
    questionsAnswered: 16
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ec'),
    result: 84,
    timeTaken: 86,
    questionsAnswered: 18
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ed'),
    result: 65,
    timeTaken: 72,
    questionsAnswered: 20
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ee'),
    result: 94,
    timeTaken: 105,
    questionsAnswered: 24
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ef'),
    result: 88,
    timeTaken: 109,
    questionsAnswered: 11
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f0'),
    result: 36,
    timeTaken: 58,
    questionsAnswered: 21
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f1'),
    result: 58,
    timeTaken: 55,
    questionsAnswered: 24
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f2'),
    result: 45,
    timeTaken: 61,
    questionsAnswered: 26
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f3'),
    result: 22,
    timeTaken: 84,
    questionsAnswered: 16
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f4'),
    result: 28,
    timeTaken: 103,
    questionsAnswered: 30
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f5'),
    result: 89,
    timeTaken: 75,
    questionsAnswered: 21
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f6'),
    result: 87,
    timeTaken: 104,
    questionsAnswered: 23
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f7'),
    result: 69,
    timeTaken: 74,
    questionsAnswered: 23
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f8'),
    result: 84,
    timeTaken: 60,
    questionsAnswered: 21
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003f9'),
    result: 33,
    timeTaken: 95,
    questionsAnswered: 18
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003fa'),
    result: 95,
    timeTaken: 65,
    questionsAnswered: 22
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003fb'),
    result: 51,
    timeTaken: 45,
    questionsAnswered: 17
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003fc'),
    result: 88,
    timeTaken: 102,
    questionsAnswered: 29
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003fd'),
    result: 92,
    timeTaken: 84,
    questionsAnswered: 19
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003fe'),
    result: 81,
    timeTaken: 82,
    questionsAnswered: 17
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a30003ff'),
    result: 94,
    timeTaken: 111,
    questionsAnswered: 21
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000400'),
    result: 59,
    timeTaken: 47,
    questionsAnswered: 13
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000401'),
    result: 76,
    timeTaken: 76,
    questionsAnswered: 14
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000402'),
    result: 27,
    timeTaken: 119,
    questionsAnswered: 11
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000403'),
    result: 44,
    timeTaken: 117,
    questionsAnswered: 13
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000404'),
    result: 52,
    timeTaken: 66,
    questionsAnswered: 27
  },
  {
    _id: new ObjectID('5eaa42b5fc13ae43a3000405'),
    result: 54,
    timeTaken: 109,
    questionsAnswered: 17
  }
];

const students = [{
  exams: [exams[0]._id, exams[1]._id, exams[2]._id],
  firstName: 'Benyamin',
  lastName: 'Laight',
  email: 'blaight0@bloglovin.com',
  gender: 'Male',
  year: 3,
  age: 23
}, {
  exams: [exams[3]._id, exams[4]._id, exams[5]._id],
  firstName: 'Cordie',
  lastName: 'Glendzer',
  email: 'cglendzer1@weather.com',
  gender: 'Male',
  year: 3,
  age: 21
}, {
  exams: [exams[6]._id, exams[7]._id, exams[8]._id],
  firstName: 'Gordon',
  lastName: 'Keenlyside',
  email: 'gkeenlyside2@icio.us',
  gender: 'Male',
  year: 4,
  age: 21
}, {
  exams: [exams[9]._id, exams[10]._id, exams[11]._id],
  firstName: 'Frasquito',
  lastName: 'Kempe',
  email: 'fkempe3@bloomberg.com',
  gender: 'Male',
  year: 3,
  age: 23
}, {
  exams: [exams[12]._id, exams[13]._id, exams[14]._id],
  firstName: 'Lenci',
  lastName: 'Isacoff',
  email: 'lisacoff4@rediff.com',
  gender: 'Male',
  year: 4,
  age: 23
}, {
  exams: [exams[15]._id, exams[16]._id, exams[17]._id],
  firstName: 'Leticia',
  lastName: 'Wollers',
  email: 'lwollers5@clickbank.net',
  gender: 'Female',
  year: 3,
  age: 22
}, {
  exams: [exams[18]._id, exams[19]._id, exams[20]._id],
  firstName: 'Bartram',
  lastName: 'Berridge',
  email: 'bberridge6@gizmodo.com',
  gender: 'Male',
  year: 4,
  age: 22
}, {
  exams: [exams[21]._id, exams[22]._id, exams[23]._id],
  firstName: 'Olga',
  lastName: 'Hassall',
  email: 'ohassall7@360.cn',
  gender: 'Female',
  year: 3,
  age: 22
}, {
  _id: new ObjectID('345345345345345345345345'),
  exams: [exams[24]._id, exams[25]._id, exams[26]._id],
  firstName: 'Piotr',
  lastName: 'Fedder',
  email: 'pfedder8@usa.gov',
  gender: 'Male',
  year: 3,
  age: 22
}, {
  exams: [exams[27]._id, exams[28]._id, exams[29]._id],
  firstName: 'Brandyn',
  lastName: 'Lamprecht',
  email: 'blamprecht9@examiner.com',
  gender: 'Male',
  year: 3,
  age: 22
}];

export default async function populate(shouldExit) {
  const db = await connectToMongoose();

  await dropCollection(db, examsCol);
  await dropCollection(db, studentsCol);

  await db.collection(examsCol).insertMany(exams);
  await db.collection(studentsCol).insertMany(students);

  if (shouldExit) {
    return process.exit(0);
  }
}
