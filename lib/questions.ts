export type Question = {
  questionText: string;
  image?: string;
  answers: string[];
  correctAnswerIndex?: number;
};

const quizQuestions: Question[] = [
  {
    questionText: "Who gifted Invisibility Cloak to Harry?",
    image:
      "https://github.com/Megabyte-143/quiz_lootbox/blob/master/assets/cloak.jpeg?raw=true",
    answers: [
      "James Potter",
      "Albus Dumbledore",
      "Nicolas Flamel",
      "Sirius Black",
    ],
    correctAnswerIndex: 1,
  },
  {
    questionText: "From whom Dumbledore get the Elder Wand?",
    image: "https://github.com/Megabyte-143/quiz_lootbox/blob/master/assets/wand.jpeg?raw=true",
    answers: ["Gellert Grindelwald", "Voldemort", "Severus Snape", "Antioch Peverell"],
    correctAnswerIndex: 0,
  },
  {
    questionText: "What is the name of the Ring which holds The Resurrection Stone?",
    image:
      "https://github.com/Megabyte-143/quiz_lootbox/blob/master/assets/stone.jpeg?raw=true",
    answers: ["Hedwig", "Thestral", "Peverrelle", "Diadem"],
    correctAnswerIndex: 2,
  },
  // {
  //   questionText:
  //     "Which was the first James Bond film to include an Aston Martin?",
  //   answers: ["Dr No", "From Russia with Love", "Goldfinger", "Thunderball"],
  //   correctAnswerIndex: 2,
  // },
  // {
  //   questionText: "What color were all Ferraris originally?",
  //   answers: ["Yellow", "White", "Blue", "Red"],
  //   correctAnswerIndex: 3,
  // },
];

export default quizQuestions;
