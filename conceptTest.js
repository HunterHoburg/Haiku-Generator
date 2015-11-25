
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

function capitalizeLine(line) {
  return line.charAt(0).toUpperCase() + line.slice(1);
}
