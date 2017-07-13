
var fs = require('fs');
var MIDIFile = require('MIDIFile');

var data = fs.readFileSync('HappyBirthday.mid');

var buf = toArrayBuffer(data)
function toArrayBuffer(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  var i;

  for(i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
}

var midiFile = new MIDIFile(buf);

// Lyrics retriever
var lyrics = midiFile.getLyrics();
for (var idx = 0; idx < lyrics.length; idx++) {
	console.log(lyrics[idx].playTime); // Time at wich the text must be displayed
	console.log(lyrics[idx].text); // The text content to be displayed
}
