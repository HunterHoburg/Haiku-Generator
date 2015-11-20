//Test Poem program
//Subjects=0 Nouns=1 Verbs=2 Adjectives=3 Adverbs=4 Preposition=5
//Conjunction=6 Determiner=7 Exclamation=8
//Noun = things
//Subjects=nouns that can be subjects of the Poem
//Verbs = actions
//Adjectives = describe nouns
//Adverbs = describe verbs
//Preposition = describes how something was done; into, with, at
//Conjunction = connect phrases; and, because, but, if, etc.
//Determiner = introduces a noun; a/an, the, this, etc.
//Exclamation = Zounds! Yoink! Nomnomnom!

var autumn = [
  //Determiner
  [
    [
      'the', 'these'
    ]
  ],
  //Subjects
  [
  //1 syllable
    [
      'trees', 'leaves', 'wind'
    ],
  ],
  //Nouns
  [
    [
      'trees', 'winds', 'leaves'
    ],
    [
      'pumpkins', 'branches', 'hollows'
    ]
  ],
  //Verbs
  [
    [
      'fall', 'hang', 'fade', 'weep', 'shed'
    ],
    [
      'whistle', 'undo'
    ]
  ],
  //Adjectives
  [
    [
      'crisp', 'cold', 'late', 'still'
    ],
    [
      'gloomy', 'faded', 'bitter', 'quiet'
    ]
  ],
  //Prepositions
  [
    [
      'with', 'through'
    ],
    [
      'over', 'under'
    ]
  ],
  //Adverbs
  [
    [
      'still', 'sad'
    ],
    [
      'grimly', 'forlorn'
    ]
  ]
  //That's it for now

]
function rando(array) {
   return array[(Math.round(Math.random()*(array.length-1)))]

}
//function making sure there are no repeats
function noRepeat() {
  var haiku = [[], [], []]
//Choosing random words with line1_1
function line1_1() {
  var determ = (rando(autumn[0][0]));
  haiku[0].push(determ);
  var adj = (rando(autumn[4][1]));
  haiku[0].push(adj);
  var noun = (rando(autumn[2][0]));
  var remove1 = autumn[2][0].indexOf(noun);
  autumn[2][0].splice(remove1, 1);
  haiku[0].push(noun);
  var verb = (rando(autumn[3][0]));
  haiku[0].push(verb);
}
//Combining the words into a sentence with line1_2
function line1_2() {
  console.log(haiku[0].join(' '));
}
function line2_1() {
  var determ = (rando(autumn[2][1]));
  haiku[1].push(determ);
  var word1 = (rando(autumn[5][0]));
  haiku[1].push(word1);
  var word2 = (rando(autumn[2][0]));
  haiku[1].push(word2);
  var word3 = (rando(autumn[3][0]));
  haiku[1].push(word3);
  var word4 = (rando(autumn[5][1]));
  haiku[1].push(word4);
}
function line2_2() {
  console.log(haiku[1].join(' '));
}
function line3_1() {
  var determ = (rando(autumn[1][0]));
  haiku[2].push(determ);
  var word1 = (rando(autumn[5][0]));
  haiku[2].push(word1);
  var word2 = (rando(autumn[2][0]));
  haiku[2].push(word2);
  var word4 = (rando(autumn[4][1]));
  haiku[2].push(word4);
}
function line3_2() {
  console.log(haiku[2].join(' '));
}
line1_1();
line1_2();
line2_1();
line2_2();
line3_1();
line3_2();

}
noRepeat();
