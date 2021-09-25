export const portfoliosData = [
  {
    title: "햄버거 찾기",
    description: "원하는 햄버거를 찾아드려요",
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
    playLink: "https://burger-finder-6bddb.web.app/",
    githubLink: "https://github.com/babyazalea/burger-finder",
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
