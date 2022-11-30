var records = [
  // add users here
  {
    id: 1,
    username: "westcliff",
    password: "secret",
    displayName: "WestCliff",
    emails: [{ value: "west@example.com" }], //this is an object
  },
  {
    id: 2,
    username: "johnny",
    password: "depp",
    displayName: "Johnny Depp",
    emails: [{ value: "jd@example.com" }],
  },
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}
