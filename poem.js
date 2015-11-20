//Subjects=0 Nouns=1 Verbs=2 Adjectives=3 Adverbs=4 Preposition=5
//Conjunction=6 Determiner=7 Exclamation=8 Colors=9 Line 1=10 Line 2=11 Line 3=12
//Noun = things
//Subjects=nouns that can be subjects of the Poem
//Verbs = actions
//Adjectives = describe nouns
//Adverbs = describe verbs
//Preposition = describes how something was done; into, with, at
//Conjunction = connect phrases; and, because, but, if, etc.
//Determiner = introduces a noun; a/an, the, this, etc.
//Exclamation = Zounds! Yoink! Nomnomnom!


var trees = [
  //Subject Nouns 0
  [
    ['elm', 'pine', 'tree', 'larch'],
    ['maple', 'sapling', 'bark', 'olive'],
    ['sycamore']
  ],
  //Nouns 1
  [
    ['branch', 'leaf', 'sap', 'trunk', 'shoot', 'root', 'seed', 'hue'],
    ['branches', 'hollows']
  ],
  //Verbs 2
  [
    ['shed', 'grow', 'grasp', 'spread'],
    ['whisper', 'sunder']
  ],
  //Adjectives 3
  [
    ['old', 'grave'],
    ['hardened', 'ancienct', 'gnarled', 'cracked', 'weathered', 'scaly', 'sashed'],
    ['matronly']
  ],
  //Adverbs 4
  [
    ['softly', 'grimly', 'sadly']
  ],
  //Prepositions 5
  [
    ['with', 'on'],
    ['over', 'throughout']
  ],
  //Conjunction 6
  [
    ['and', 'but', 'if'],
    ['because']
  ],
  //Determiners 7
  [
    ['a', 'this', 'the']
  ],
  //Colors 8
  [
    ['red', 'gold', 'green', 'black', 'brown'],
    ['golden', 'orange', 'purple']
  ],
  //Line 1 variations 9
  [
    []
  ]
]

var treeHaiku = [[], [], []];

function line5() {
  var determ = (rando(trees[7][0]))
  treeHaiku[0].push(determ);
  var remove1 = 
}
