export const portfoliosData = [
  {
    title: "test1",
    description: "test1 desc",
    skills: ["react", "firebase", "angular"],
    "color-theme": {
      card: {
        backgroundColor: "#FBAB7E",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
      "inside-card": {
        textBg: { backgroundColor: "var(--amber-color100)" },
        emojiBg: { backgroundColor: "var(--white-color)" },
      },
    },
    emoji: "🍔",
  },
  {
    title: "test2",
    description: "test2 desc",
    skills: ["react", "firebase"],
    "color-theme": {
      card: {
        backgroundColor: "#FBAB7E",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
      "inside-card": {
        textBg: { backgroundColor: "var(--amber-color100)" },
        emojiBg: { backgroundColor: "var(--white-color)" },
      },
    },
    emoji: "🍔",
  },
  {
    title: "test3",
    description: "test3 desc",
    skills: ["react", "angular"],
    "color-theme": {
      card: {
        backgroundColor: "#FBAB7E",
        backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
      "inside-card": {
        textBg: { backgroundColor: "var(--amber-color100)" },
        emojiBg: { backgroundColor: "var(--white-color)" },
      },
    },
    emoji: "🍔",
  },
];

export const hadSkills = () => {
  const skillCollection = [];
  for (let i = 0; i < portfoliosData.length; i++) {
    skillCollection.push(portfoliosData[i].skills);
  }

  const removeDuplicateSkills = [...new Set(skillCollection.flat())];

  return removeDuplicateSkills;
};
