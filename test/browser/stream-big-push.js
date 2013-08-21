
var test = require('tape');

var stream = require('stream');
var str = 'asdfasdfasdfasdfasdf';

test('stream.Readable - big push', function (t) {
  var r = new stream.Readable({
    highWaterMark: 5,
    encoding: 'utf8'
  });

  var reads = 0;
  var eofed = false;
  var ended = false;

  r._read = function(n) {
    if (reads === 0) {
      setTimeout(function() {
        r.push(str);
      });
      reads++;
    } else if (reads === 1) {
      var ret = r.push(str);
      t.equal(ret, false);
      reads++;
    } else {
      t.ok(!eofed);
      eofed = true;
      r.push(null);
    }
  };

  r.on('end', function() {
    ended = true;
    done();
  });

  // push some data in to start.
  // we've never gotten any read event at this point.
  var ret = r.push(str);
  // should be false.  > hwm
  t.ok(!ret);
  var chunk = r.read();
  t.equal(chunk, str);
  chunk = r.read();
  t.equal(chunk, null);

  r.once('readable', function() {
    // this time, we'll get *all* the remaining data, because
    // it's been added synchronously, as the read WOULD take
    // us below the hwm, and so it triggered a _read() again,
    // which synchronously added more, which we then return.
    chunk = r.read();
    t.equal(chunk, str + str);

    chunk = r.read();
    t.equal(chunk, null);
  });

  function done() {
    t.ok(eofed);
    t.ok(ended);
    t.equal(reads, 2);
    t.end();
  }
});
