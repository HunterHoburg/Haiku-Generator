var funcArr = [testPoem1, testPoem2, testPoem3, testPoem4, testPoem5]

function testPoem1(theme1) {
  var temp = newObj(theme1);
  var haiku = [[], [], []];
var line11 = function(temp) {
  var subj = temp['subjects'][0];
  var word2 = randomWord(subj);
  haiku[0].push(word2);
  subj.splice(subj.indexOf(word2), 1);
  //checking to conjugate for nouns starting with vowels
  var word1 = randomWord(temp['determiners'][0])
    determBegin(word2, word1, 0, haiku)
  var verb = temp['verbs'][0]
  var word3 = randomWord(verb);
  verb.splice(verb.indexOf(word3), 1);
  //Checking for subject/noun plurality
    plural(word2, word3, 0, haiku);
  var adv = temp['adverbs'][1];
  var word4 = randomWord(adv);
  haiku[0].push(word4);
  adv.splice(adv.indexOf(word4), 1);
  var line1 = haiku[0].join(' ');
  return capitalizeLine(line1);
}
var line21 = function(temp) {
  var noun = temp['nouns'][1];
  var word1 = randomWord(noun);
  haiku[1].push(word1);
  noun.splice(noun.indexOf(word1), 1);
  var verb = temp['verbs'][1];
  var word2 = randomWord(verb);
  //Checking for subject/noun plurality
    plural(word1, word2, 1, haiku);
  var adv = temp['adverbs'][1];
  var word3 = randomWord(adv);
  haiku[1].push(word3);
  adv.splice(adv.indexOf(word3), 1);
  var prep = temp['prepositions'][1];
  var word4 = randomWord(prep);
  haiku[1].push(word4);
  prep.splice(prep.indexOf(word4), 1);
  var line2 = haiku[1].join(' ');
  return capitalizeLine(line2);
}
var line31 = function(temp) {
  var noun = temp['nouns'][1];
  var word1 = randomWord(noun);
  haiku[2].push(word1);
  noun.splice(noun.indexOf(word1), 1);
  //checking to conjugate for nouns starting with vowels
  var adj = temp['adjectives'][1];
  var word2 = randomWord(adj);
  haiku[2].push(word2 + ',');
  adj.splice(adj.indexOf(word2), 1);
  var adj2 = temp['adjectives'][0];
  var word3 = randomWord(adj2);
  haiku[2].push(word3);
  adj2.splice(adj.indexOf(word3), 1);
  var line3 = haiku[2].join(' ');
  return capitalizeLine(line3);
};
var haiku2 ='<div>' + '<p>'+line11(temp)+ '</p><br><p>' + line21(temp) + '</p><br><p>' + line31(temp)+'</p>' + '</div>';
return haiku2
};

function testPoem2(theme1) {
var temp = newObj(theme1);
var haiku = [[], [], []];
var line11 = function(temp) {
  var subj = temp['subjects'][0];
  var word2 = randomWord(subj);
  haiku[0].push(word2);
  subj.splice(subj.indexOf(word2), 1);
  //checking to conjugate for nouns starting with vowels
  var word1 = randomWord(temp['determiners'][0])
    determBegin(word2, word1, 0, haiku)
  var verb = temp['verbs'][0]
  var word3 = randomWord(verb);
  verb.splice(verb.indexOf(word3), 1);
  //Checking for subject/noun plurality
    plural(word2, word3, 0, haiku);
  var adv = temp['adverbs'][1];
  var word4 = randomWord(adv);
  haiku[0].push(word4);
  adv.splice(adv.indexOf(word4), 1);
  var line1 = haiku[0].join(' ');
  return capitalizeLine(line1);
}
var line21 = function(temp) {
  var noun = temp['nouns'][0];
  var word1 = randomWord(noun);
  ef(word1, 1, haiku)
  noun.splice(noun.indexOf(word1), 1);
  var verb = temp['verbs'][0];
  var word2 = randomWord(verb);
  haiku[1].push(word2);
  var adv = temp['adverbs'][1];
  var word3 = randomWord(adv);
  haiku[1].push(word3);
  adv.splice(adv.indexOf(word3), 1);
  var prep = temp['prepositions'][1];
  var word4 = randomWord(prep);
  haiku[1].push(word4);
  prep.splice(prep.indexOf(word4), 1);
  var line2 = haiku[1].join(' ');
  return capitalizeLine(line2);
}

//1
var line32 = function(temp) {
  var noun = temp['nouns'][0];
  var word1 = randomWord(noun);
  ef(word1, 2, haiku);
  noun.splice(noun.indexOf(word1), 1);
  //checking to conjugate for nouns starting with vowels
  var adj = temp['adjectives'][1];
  var word2 = randomWord(adj);
  haiku[2].push(word2 + ' and');
  adj.splice(adj.indexOf(word2), 1);
  var adj2 = temp['adjectives'][0];
  var word3 = randomWord(adj2);
  haiku[2].push(word3);
  adj2.splice(adj.indexOf(word3), 1);
  var line3 = haiku[2].join(' ');
  return capitalizeLine(line3);
};

var haiku2 ='<div>' + '<p>'+line11(temp)+ '</p><br><p>' + line21(temp) + '</p><br><p>' + line32(temp)+'</p>' + '</div>';

return haiku2
}

function testPoem3(theme1) {

// var temp = {}
var temp = newObj(theme1);
var haiku = [[], [], []];

var line11 = function(temp) {
  var adj = temp['adjectives'][1];
  var word1 = randomWord(adj);
  haiku[0].push(word1);
  adj.splice(adj.indexOf(word1), 1);
  var subj = temp['subjects'][1];
  var word2 = randomWord(subj);
  haiku[0].push(word2);
  subj.splice(subj.indexOf(word2), 1);
  var verb = temp['verbs'][0]
  var word3 = randomWord(verb);
  verb.splice(verb.indexOf(word3), 1);
  plural(word2, word3, 0, haiku);
  var line1 = haiku[0].join(' ');
  return capitalizeLine(line1);
}

//Line variations for second line
var line22 = function(temp) {
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 1, haiku)
  noun.splice(noun.indexOf(word1), 1);
  var word1 = randomWord(temp['determiners'][0])
    determBegin(word2, word1, 0, haiku);
  var adv = temp['adverbs'][1];
  var word3 = randomWord(adv);
    haiku[1].push(word3);
    adv.splice(adv.indexOf(word3), 1);
  var verb = temp['verbs'][0];
  var word4 = randomWord(verb);

  haiku[1].push(word4 + 'ing in');
  var color = temp['colors'][0];
  var word5 = randomWord(color);
  haiku[1].push(word5);

  var line2 = haiku[1].join(' ');
  return capitalizeLine(line2);
}

//1
var line33 = function(temp) {
  var adj = temp['adjectives'][1];
  var word1 = randomWord(adj);
  haiku[2].push(word1);
  adj.splice(adj.indexOf(word1), 1);
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 2, haiku);
  noun.splice(noun.indexOf(word2), 1);
  //checking to conjugate for nouns starting with vowels
  var verb = temp['verbs'][0];
  var word3 = randomWord(verb);
  haiku[2].push(word3 + 'ing');
  verb.splice(verb.indexOf(word3), 1);
  var line3 = haiku[2].join(' ');
  return capitalizeLine(line3);
};

var haiku2 ='<div>' + '<p>'+line11(temp)+ '</p><br><p>' + line22(temp) + '</p><br><p>' + line33(temp)+'</p>' + '</div>';

return haiku2
}

function testPoem4(theme1) {

// var temp = {}
var temp = newObj(theme1);
var haiku = [[], [], []];

var line32 = function(temp) {
  var noun = temp['nouns'][0];
  var word1 = randomWord(noun);
  ef(word1, 0, haiku);
  noun.splice(noun.indexOf(word1), 1);
  //checking to conjugate for nouns starting with vowels
  var adj = temp['adjectives'][1];
  var word2 = randomWord(adj);
  haiku[0].push(word2 + ' and');
  adj.splice(adj.indexOf(word2), 1);
  var adj2 = temp['adjectives'][0];
  var word3 = randomWord(adj2);
  haiku[0].push(word3);
  adj2.splice(adj.indexOf(word3), 1);
  var line1 = haiku[0].join(' ');
  return capitalizeLine(line1);
};

//Line variations for second line
var line21 = function(temp) {
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 1, haiku)
  noun.splice(noun.indexOf(word2), 1);
  var word1 = randomWord(temp['determiners'][0])
    determBegin(word2, word1, 0, haiku);
  var adv = temp['adverbs'][1];
  var word3 = randomWord(adv);
    haiku[1].push(word3);
    adv.splice(adv.indexOf(word3), 1);
  var verb = temp['verbs'][0];
  var word4 = randomWord(verb);
    verb.splice(verb.indexOf(word4), 1);
  haiku[1].push(word4 + 'ing in');
  var color = temp['colors'][0];
  var word5 = randomWord(color);
  haiku[1].push(word5);

  var line2 = haiku[1].join(' ');
  return capitalizeLine(line2);
}

//1
var line31 = function(temp) {
  var adj = temp['adjectives'][1];
  var word1 = randomWord(adj);
  haiku[2].push(word1);
  adj.splice(adj.indexOf(word1), 1);
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 2, haiku);
  noun.splice(noun.indexOf(word2), 1);
  //checking to conjugate for nouns starting with vowels
  var verb = temp['verbs'][0];
  var word3 = randomWord(verb);
  haiku[2].push(word3 + 'ing');
  verb.splice(verb.indexOf(word3), 1);
  var line3 = haiku[2].join(' ');
  return capitalizeLine(line3);
};

var haiku2 ='<div>' + '<p>'+line32(temp)+ '</p><br><p>' + line21(temp) + '</p><br><p>' + line31(temp)+'</p>' + '</div>';

return haiku2
}

function testPoem5(theme1) {

// var temp = {}
var temp = newObj(theme1);
var haiku = [[], [], []];

var line32 = function(temp) {
  var noun = temp['nouns'][2];
  var word1 = randomWord(noun);
  ef(word1, 0, haiku);
  noun.splice(noun.indexOf(word1), 1);
  var adj = temp['adjectives'][1];
  var word2 = randomWord(adj);
  haiku[0].push(word2 + ',');
  adj.splice(adj.indexOf(word2), 1);
  var adj2 = temp['adjectives'][0];
  var word3 = randomWord(adj2);
  haiku[0].push(word3);
  adj2.splice(adj.indexOf(word3), 1);
  var line1 = haiku[0].join(' ');
  return capitalizeLine(line1);
};

//Line variations for second line
var line21 = function(temp) {
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 1, haiku)
  noun.splice(noun.indexOf(word1), 1);
  var word1 = randomWord(temp['determiners'][0])
    determBegin(word2, word1, 0, haiku);
  var adv = temp['adverbs'][1];
  var word3 = randomWord(adv);
    haiku[1].push(word3);
    adv.splice(adv.indexOf(word3), 1);
  var verb = temp['verbs'][0];
  var word4 = randomWord(verb);

  haiku[1].push(word4 + 'ing in');
  var color = temp['colors'][0];
  var word5 = randomWord(color);
  haiku[1].push(word5);

  var line2 = haiku[1].join(' ');
  return capitalizeLine(line2);
}

//1
var line31 = function(temp) {
  var adj = temp['adjectives'][1];
  var word1 = randomWord(adj);
  haiku[2].push(word1);
  adj.splice(adj.indexOf(word1), 1);
  var noun = temp['nouns'][0];
  var word2 = randomWord(noun);
  ef(word2, 2, haiku);
  noun.splice(noun.indexOf(word2), 1);
  //checking to conjugate for nouns starting with vowels
  var verb = temp['verbs'][0];
  var word3 = randomWord(verb);
  haiku[2].push(word3 + 'ing');
  verb.splice(verb.indexOf(word3), 1);
  var line3 = haiku[2].join(' ');
  return capitalizeLine(line3);
};

var haiku2 ='<div>' + '<p>'+line32(temp)+ '</p><br><p>' + line21(temp) + '</p><br><p>' + line31(temp)+'</p>' + '</div>';

return haiku2
}
