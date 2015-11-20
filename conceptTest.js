var themes = {
  'trees': {
    'subjects': [
      ['elm', 'pine', 'tree', 'larch'],
      ['maple', 'sapling', 'bark', 'olive'],
      ['sycamore']
    ],
    'nouns': [
      ['branch', 'leaf', 'sap', 'trunk', 'shoot', 'root', 'seed', 'hue'],
      ['branches', 'hollows']
    ],
    'verbs': [
      ['shed', 'grow', 'grasp', 'spread'],
      ['whisper', 'sunder']
    ],
    'adjectives': [
      ['old', 'grave'],
      ['ancient', 'gnarled', 'cracked', 'weathered', 'scaly', 'sashed'],
      ['hardened', 'matronly']
    ],
    'adverbs': [
      [],
      ['softly', 'grimly', 'sadly']
    ],
    'prepositions': [
      ['with', 'on'],
      ['over', 'throughout']
    ],
    'conjunctions': [
      ['and', 'but', 'if'],
      ['because']
    ],
    'determiners': [
      ['a', 'the']
    ],
    'colors': [
      ['red', 'gold', 'green', 'black', 'brown'],
      ['golden', 'orange', 'purple']
    ]
  }
  //Add comma above and next theme here
}

//Function for choosing a random word from a syllabus key
function randomWord(array) {
  return array[Math.round(Math.random()*(array.length-1))]
}

//GRAMMAR TEMPLATES

//checking if subject/noun starts with a vowel
// if (vowels.indexOf(subj.charAt(0)) > -1) {
//   var determ = 'an';
//   haiku[0].unshift(determ);
// } else {
//     var deter = randomWord(theme['determiners'][0]);
//     haiku[0].unshift(deter);
//   };

//checking if subject/noun is plural
// var verb = randomWord(theme['verbs'][0]);
// //Checking for subject/noun plurality
//   if (subj.charAt(subj.length-1) !== 's') {
//     verb = verb.concat('s');
//     haiku[0].push(verb);
//   } else {
//     haiku[0].push(verb);
//   }

//Empty haiku variable
var haiku = [[], [], []];
var vowels = ['a', 'e', 'i', 'o', 'u']
//Line variations for five syllables
var line50 = function(theme) {
  var subj = randomWord(theme['subjects'][0]);
  haiku[0].push(subj);
  //checking to conjugate for nouns starting with vowels
    if (vowels.indexOf(subj.charAt(0)) > -1) {
      var determ = 'an';
      haiku[0].unshift(determ);
    } else {
        var deter = randomWord(theme['determiners'][0]);
        haiku[0].unshift(deter);
      };
  var verb = randomWord(theme['verbs'][0]);
  //Checking for subject/noun plurality
    if (subj.charAt(subj.length-1) !== 's') {
      verb = verb.concat('s');
      haiku[0].push(verb);
    } else {
      haiku[0].push(verb);
    }
  var adv = randomWord(theme['adverbs'][1]);
  haiku[0].push(adv);
  return haiku[0];
}

//Line variations for seven syllables
var line70 = function(theme) {
  var noun = randomWord(theme['nouns'][1]);
  haiku[1].push(noun);
  var verb = randomWord(theme['verbs'][0]);
  //Checking for subject/noun plurality
    if (subj.charAt(subj.length-1) !== 's') {
      verb = verb.concat('s');
      haiku[0].push(verb);
    } else {
      haiku[0].push(verb);
    }
  var adv = randomWord(theme['adverbs'][1]);
  haiku[0].push(adv);
  return haiku[0];
}
console.log(line50(themes['trees']));
