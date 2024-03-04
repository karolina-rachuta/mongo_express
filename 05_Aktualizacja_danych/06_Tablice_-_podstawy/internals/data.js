import MongoClient from 'mongodb';

const ObjectID = MongoClient.ObjectID;

export const data = [ {
  'samples': [
    {
      _id: new ObjectID(),
      'depth': 34
    },
    {
      _id: new ObjectID(),
      'depth': 3
    },
    {
      _id: new ObjectID(),
      'depth': 103
    },
    {
      _id: new ObjectID(),
      'depth': 54
    },
    {
      _id: new ObjectID(),
      'depth': 96
    }
  ]
}, {
  _id: '123456',
  'samples': [
    {
      _id: new ObjectID(),
      'depth': 54
    },
    {
      _id: new ObjectID(),
      'depth': 13
    },
    {
      _id: new ObjectID(),
      'depth': 67
    },
    {
      _id: new ObjectID(),
      'depth': 95
    },
    {
      _id: new ObjectID(),
      'depth': 35
    },
  ]
}, {
  'samples': [
    {
      _id: new ObjectID(),
      'depth': 62
    },
    {
      _id: new ObjectID(),
      'depth': 2
    },
    {
      _id: new ObjectID(),
      'depth': 87
    },
    {
      _id: new ObjectID(),
      'depth': 21
    },
    {
      _id: new ObjectID(),
      'depth': 107
    }
  ]
}, {
  _id: '789101112',
  'samples': [
    {
      _id: new ObjectID(),
      'depth': 12
    },
    {
      _id: new ObjectID(),
      'depth': 3
    },
    {
      _id: new ObjectID(),
      'depth': 85
    },
    {
      _id: new ObjectID(),
      'depth': 93
    },
    {
      _id: new ObjectID(),
      'depth': 35
    }
  ]
}, {
  'samples': [
    {
      _id: new ObjectID(),
      'depth': 111
    },
    {
      _id: new ObjectID(),
      'depth': 23
    },
    {
      _id: new ObjectID(),
      'depth': 74
    },
    {
      _id: new ObjectID(),
      'depth': 4
    },
    {
      _id: new ObjectID(),
      'depth': 34
    }
  ]
} ];

