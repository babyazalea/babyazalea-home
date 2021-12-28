export const portfoliosData = [
  {
    title: "햄버거 찾기",
    description: [
      "원하는 재료를 입력하면 시중에서 가장 비슷한 햄버거를 찾아주는 웹 어플리케이션입니다.",
      "프론트엔드는 React, 백엔드는 Firebase를 기반으로 만들어졌습니다.",
      "이메일과 패스워드를 이용하여 유저로 등록(가입)할 수 있고 로그인, 비밀번호 재설정, 닉네임 변경이 가능합니다.",
      "CSS 프레임워크를 사용하지 않은, Pure-CSS로 스타일링 되었습니다.",
      "media-query를 이용한 반응형 웹입니다.",
    ],
    skills: ["react", "firebase"],
    emoji: "🍔",
    playLink: "https://burger-finder-6bddb.web.app/",
    githubLink: "https://github.com/babyazalea/burger-finder",
  },{
    title: "몽노캄",
    description: [
      "Github 저장소를 리스트로 만들어 관리할 수 있습니다.",
      "프론트엔드는 Angular, 백엔드는 Firebase를 기반입니다.",
      "Github OAuth를 이용해서 로그인하고, 저장소를 불러옵니다.",
      "생성한 리스트를 저장(in Firebase)할 수 있습니다.",
      "CSS 프레임워크를 사용하지 않은, Pure-CSS로 스타일링 되었습니다.",
    ],
    skills: ["angular", "firebase"],
    emoji: "🗂",
    playLink: "https://mongnokam.web.app/",
    githubLink: "https://github.com/babyazalea/mongnokam",
  },
];

export const hadSkills = () => {
  const skillCollection = [];
  for (let i = 0; i < portfoliosData.length; i++) {
    skillCollection.push(portfoliosData[i].skills);
  }

  return [...new Set(skillCollection.flat())];
};
