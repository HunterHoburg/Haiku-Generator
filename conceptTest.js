
//BUILD A RULE FOR CORRECT DETERMINERS

//Function for choosing a random word from a syllabus key
function randomWord(array) {
  return array[Math.round(Math.random()*(array.length-1))]
}

//Function for cloning the theme into a function

//Function for removing a word from the array to reduce duplicity
// theme['nouns'][1].splice(theme['nouns'][1].indexOf(noun), 1);

//GRAMMAR TEMPLATES

//checking if subject/noun starts with a vowel, with the determ at the beginning of the sentence
function determBegin(noun, determ, x, array) {
if (noun.charAt(noun.length-1) == 's') {
  determ = 'the';
  array[x].unshift(determ);
} else {
  if (vowels.indexOf(noun.charAt(0)) > -1) {
  determ = 'an';
  array[x].unshift(determ);
  } else {
    array[x].unshift(determ);
  };
};
};

function determ(noun, determ, x, array) {

if (vowels.indexOf(noun.charAt(0)) > -1) {
  determ = 'an';
  array[x].unshift(determ);
} else {
    array[x].unshift(determ);
  };
};
//checking if subject/noun is plural
function plural(noun, verb, x, array) {
  if (noun.charAt(noun.length-1) !== 's') {
      verb = verb.concat('s');
      array[x].push(verb);
    } else {
      array[x].push(verb);
    }
};
//checking if subject/noun ends in e or f so it can be pluralized correctly
function ef(word1, x, array) {
if (word1.charAt(word1.length - 1) == 'h' && word1.charAt(word1.length - 2) == 'c') {
array[x].push(word1 + 'es');
} else if (word1.charAt(word1.length - 1) == 'f') {
var fWord = word1.slice(0, -1)
array[x].push(fWord + 'ves');
} else if (word1.charAt(word1.length-1) == 's'){
  array[x].push(word1);
} else {
array[x].push(word1 + 's');
}
};



//Empty haiku variable
var haiku = [[], [], []];
var vowels = ['a', 'e', 'i', 'o', 'u'];
//Function for replicating the theme
var newObj = function(category) {
  var obj = {};
  for (var grammar in category) {
    if (!obj[grammar]) {
      obj[grammar] = [];
    }
    for (var i = 0; i < category[grammar].length; i++) {
      if (!obj[grammar][i]) {
        obj[grammar][i] = [];
      }
      for (var j= 0; j < category[grammar][i].length; j++) {
        obj[grammar][i].push(category[grammar][i][j]);
      }
    }
  }
  return obj;
};


function testPoem1(theme1) {

  var temp = newObj(theme1);
  var haiku = [[], [], []];

//1
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
  return line1;
}

//Line variations for second line
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
  return line2;
}

//1
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
  return line3;
};
var haiku2 ='<div>' + '<p>'+line11(temp)+ '</p><br><p>' + line21(temp) + '</p><br><p>' + line31(temp)+'</p>' + '</div>';

return haiku2
};

function testPoem2(theme1) {

// var temp = {}
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
  return line1;
}

//Line variations for second line
var line21 = function(temp) {
  var noun = temp['nouns'][0];
  var word1 = randomWord(noun);
  ef(word1, 1, haiku)
  noun.splice(noun.indexOf(word1), 1);
  var verb = temp['verbs'][0];
  var word2 = randomWord(verb);
  //Checking for subject/noun plurality
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
  return line2;
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
  return line3;
};

console.log(line11(temp));
console.log(line21(temp));
console.log(line32(temp));
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
  return line1;
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
  return line2;
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
  return line3;
};

console.log(line11(temp));
console.log(line22(temp));
console.log(line33(temp));
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
  return line1;
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
  return line2;
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
  return line3;
};

console.log(line32(temp));
console.log(line21(temp));
console.log(line31(temp));
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
  //checking to conjugate for nouns starting with vowels
  var adj = temp['adjectives'][1];
  var word2 = randomWord(adj);
  haiku[0].push(word2 + ',');
  adj.splice(adj.indexOf(word2), 1);
  var adj2 = temp['adjectives'][0];
  var word3 = randomWord(adj2);
  haiku[0].push(word3);
  adj2.splice(adj.indexOf(word3), 1);
  var line1 = haiku[0].join(' ');
  return line1;
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
  return line2;
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
  return line3;
};

console.log(line32(temp));
console.log(line21(temp));
console.log(line31(temp));
}

// console.log(testPoem1(themes['fish']));
// testPoem2(themes['fish']);
// testPoem3(themes['fish']);
// testPoem4(themes['fish']);
// testPoem5(themes['fish']);
