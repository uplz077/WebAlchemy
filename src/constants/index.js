import {
  linkedin,
  webService,
  nodeService,
  fullService,
  aiService,
  metaCmp,
  starbucksCmp,
  teslaCmp,
  tsTech,
  dartTech,
  cssTech,
  reactTech,
  vueTech,
  tailwind,
  flutter,
  mongodb,
  docker,
  threejs,
  nodejs,
  webCover,
  mobileCover,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
} from "../assets";

/*用户信息*/
const profiles = {
  name: "Jarèd",
  surname: "Jarèd Li",
  position: "Javascript Developer",
  brief: "一名资深前端开发工程师",
  briefSub: "和AI应用探索者",
  icp: "某ICP备xxxxxxxx号-x",
};

/*导航列表*/
const navLinks = [
  {
    id: "about",
    title: "关于我",
  },
  {
    id: "experience",
    title: "工作经历",
  },
  {
    id: "work",
    title: "项目经历",
  },
  {
    id: "contact",
    title: "联系我",
  },
  // {
  //   id: "cv",
  //   title: "CV",
  //   url: "https://docs.google.com/document/d/1lwZV76onsyxAB1CbrkYEd6uhBP7iCh_zoh0ou9wFAX8/edit?usp=sharing",
  // },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: linkedin, // You can use an icon class or an SVG here
    url: "https://www.linkedin.com/in/%E5%BF%97-%E6%9D%8E-395430306/",
  },
];

/*岗位*/
const services = [
  {
    id: "web",
    title: "前端开发",
    icon: webService,
  },
  {
    id: "nodejs",
    title: "Nodejs后端开发",
    icon: nodeService,
  },
  {
    id: "full",
    title: "全栈开发",
    icon: fullService,
  },
  {
    id: "ai",
    title: "AI应用开发",
    icon: aiService,
  },
];

/*工作经历*/
const experiences = [
  {
    title: "资深前端开发",
    company_name: "Meat元宇宙平台公司",
    icon: metaCmp,
    iconBg: "#fdce47",
    date: "2022.2-2024.3",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug 修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了多个项目，积累了丰富的多端开发经验。",
    ],
  },
  {
    title: "全栈开发工程师",
    company_name: "星巴克咖啡公司",
    icon: starbucksCmp,
    iconBg: "#FFFFFF",
    date: "2018.12-2021.12",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug 修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了多个项目，积累了丰富的多端开发经验。",
    ],
  },
  {
    title: "移动APP开发工程师",
    company_name: "特斯拉公司",
    icon: teslaCmp,
    iconBg: "#06b3ba",
    date: "2016.3-2018.10",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug 修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了多个项目，积累了丰富的多端开发经验。",
    ],
  },
];

/*技术栈, 长度最好小于14个，多了可能会出现显示问题*/
const technologies = [
  {
    name: "TypeScript",
    icon: tsTech,
    experienceYears: "1",
  },
  {
    name: "Dart",
    icon: dartTech,
    experienceYears: "1",
  },
  {
    name: "CSS 3",
    icon: cssTech,
    experienceYears: "1",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    experienceYears: "1",
  },
  {
    name: "React JS",
    icon: reactTech,
    experienceYears: "1",
  },
  {
    name: "Vue JS",
    icon: vueTech,
    experienceYears: "1",
  },
  {
    name: "Flutter",
    icon: flutter,
    experienceYears: "1",
  },
  {
    name: "Node JS",
    icon: nodejs,
    experienceYears: "1",
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
    experienceYears: "1",
  },
  {
    name: "Three JS",
    icon: threejs,
    experienceYears: "1",
  },
  // 其他技术可以按照此格式添加:
  // {
  //   name: "SQL",
  //   icon: sql,
  //   experienceYears: "1",
  // },
];

const projects = [
  {
    name: "AAAAAA中台项目",
    description:
      "Web应用程序，由Django和React提供支持，专为营销机构设计。它具有安全的登录系统、强大的数据库管理和用于分享行业见解和更新的动态博客",
    tags: [
      {
        name: "ReactJS",
        color: "tag-indigo-blue-gradient-dark",
      },
      {
        name: "Ant Design",
        color: "tag-blue-cyan-gradient-darker",
      },
      {
        name: "DvaJS",
        color: "tag-pink-purple-gradient-dark",
      },
      {
        name: "JavaScript",
        color: "tag-yellow-gradient-dark",
      },
    ],
    image: webCover,
    source_code_link: "",
    category: "web_development",
  },
  {
    name: "BBBBBB项目",
    description:
      "Web应用程序，由Django和React提供支持，专为营销机构设计。它具有安全的登录系统、强大的数据库管理和用于分享行业见解和更新的动态博客",
    tags: [
      {
        name: "Eggjs",
        color: "tag-red-gradient",
      },
      {
        name: "Nodejs",
        color: "tag-green-gradient",
      },
      {
        name: "ReactJS",
        color: "tag-indigo-blue-gradient-dark",
      },
      {
        name: "MongoDB",
        color: "tag-green-white-gradient-darker",
      },
      {
        name: "Tailwind",
        color: "tag-blue-cyan-gradient-dark",
      },
    ],
    image: webCover,
    source_code_link: "",
    category: "web_development",
  },
  {
    name: "CCCCCC项目",
    description:
      "Web应用程序，由Django和React提供支持，专为营销机构设计。它具有安全的登录系统、强大的数据库管理和用于分享行业见解和更新的动态博客",
    tags: [
      {
        name: "VueJS",
        color: "tag-green-lime-gradient-darker",
      },
      {
        name: "Ant Design",
        color: "tag-blue-cyan-gradient-darker",
      },
      {
        name: "JavaScript",
        color: "tag-yellow-gradient-dark",
      },
    ],
    image: webCover,
    source_code_link: "",
    category: "web_development",
  },
  // {
  //   name: "营销系统",
  //   description:
  //     "Web应用程序，由Django和React提供支持，专为营销机构设计。它具有安全的登录系统、强大的数据库管理和用于分享行业见解和更新的动态博客",
  //   tags: [
  //     {
  //       name: "Python",
  //       color: "tag-blue-yellow-gradient-darker",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "tag-yellow-gradient-dark",
  //     },
  //     {
  //       name: "Django",
  //       color: "tag-red-pink-gradient-darker",
  //     },
  //     {
  //       name: "ReactJS",
  //       color: "tag-indigo-blue-gradient-dark",
  //     },
  //     {
  //       name: "Tailwind",
  //       color: "tag-blue-cyan-gradient-dark",
  //     },
  //   ],
  //   image: webCover,
  //   source_code_link: "",
  //   category: "web_development",
  // },
  {
    name: "BBBBB APP",
    description:
      "一款受Poppular Games创建的流行纸牌游戏启发的移动应用程序。与朋友一起享受对吸烟友好的游戏，其中香烟填充完全由玩家自行决定和负责。",
    tags: [
      {
        name: "JavaScript",
        color: "tag-yellow-gradient-dark",
      },
      {
        name: "VueJS",
        color: "tag-green-lime-gradient-darker",
      },
      {
        name: "Vant",
        color: "tag-blue-cyan-gradient-darker",
      },
    ],
    image: mobileCover,
    source_code_link: "",
    category: "mobile_app",
  },
  {
    name: "CCCCCC APP",
    description:
      "一款受Poppular Games创建的流行纸牌游戏启发的移动应用程序。与朋友一起享受对吸烟友好的游戏，其中香烟填充完全由玩家自行决定和负责。",
    tags: [
      {
        name: "VueJS",
        color: "tag-green-lime-gradient-darker",
      },
      {
        name: "uni-app",
        color: "tag-cyan-teal-gradient-dark",
      },
      {
        name: "git-config",
        color: "tag-orange-pink-gradient-dark",
      },
    ],
    image: mobileCover,
    source_code_link: "",
    category: "mobile_app",
  },
  {
    name: "DDDDDD APP",
    description:
      "一款受Poppular Games创建的流行纸牌游戏启发的移动应用程序。与朋友一起享受对吸烟友好的游戏，其中香烟填充完全由玩家自行决定和负责。",
    tags: [
      {
        name: "Flutter",
        color: "tag-indigo-blue-grey-gradient-darker",
      },
      {
        name: "Dart",
        color: "tag-blue-cyan-gradient-darker",
      },
      {
        name: "Android",
        color: "tag-green-lime-gradient-darker",
      },
      {
        name: "IOS",
        color: "tag-purple-pink-gradient-dark",
      },
    ],
    image: mobileCover,
    source_code_link: "",
    category: "mobile_app",
  },
  {
    name: "FFFFFF APP",
    description:
      "一款受Poppular Games创建的流行纸牌游戏启发的移动应用程序。与朋友一起享受对吸烟友好的游戏，其中香烟填充完全由玩家自行决定和负责。",
    tags: [
      {
        name: "VueJS",
        color: "tag-green-lime-gradient-darker",
      },
      {
        name: "uni-app",
        color: "tag-cyan-teal-gradient-dark",
      },
      {
        name: "Android",
        color: "tag-green-lime-gradient-darker",
      },
    ],
    image: mobileCover,
    source_code_link: "",
    category: "mobile_app",
  },
  // {
  //   name: "Fumanyi App",
  //   description:
  //     "一款受Poppular Games创建的流行纸牌游戏启发的移动应用程序。与朋友一起享受对吸烟友好的游戏，其中香烟填充完全由玩家自行决定和负责。",
  //   tags: [
  //     {
  //       name: "Flutter",
  //       color: "tag-indigo-blue-grey-gradient-darker",
  //     },
  //     {
  //       name: "Dart",
  //       color: "tag-blue-cyan-gradient-darker",
  //     },
  //     {
  //       name: "Android",
  //       color: "tag-green-lime-gradient-darker",
  //     },
  //   ],
  //   image: bikeMp,
  //   source_code_link: "",
  //   category: "mobile_app",
  // },
  {
    name: "图像分类ML API",
    description:
      "使用带有Web UI和Flask API的TensorFlow CNN自动图像分类，可无缝上传和预测1000多个类别，提高效率。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Flask",
        color: "tag-red-gradient-dark",
      },
      {
        name: "Redis",
        color: "tag-blue-cyan-gradient-dark",
      },
      {
        name: "Docker",
        color: "tag-orange-pink-gradient-dark",
      },
      {
        name: "Tensorflow",
        color: "tag-deep-purple-indigo-gradient-darker",
      },
    ],
    image: webCover,
    source_code_link: "",
    category: "AI",
  },
  {
    name: "图像分类ML API",
    description:
      "使用带有Web UI和Flask API的TensorFlow CNN自动图像分类，可无缝上传和预测1000多个类别，提高效率。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Flask",
        color: "tag-red-gradient-dark",
      },
      {
        name: "Redis",
        color: "tag-blue-cyan-gradient-dark",
      },
      {
        name: "Docker",
        color: "tag-orange-pink-gradient-dark",
      },
      {
        name: "Tensorflow",
        color: "tag-deep-purple-indigo-gradient-darker",
      },
    ],
    image: webCover,
    source_code_link: "",
    category: "AI",
  },
];

/*用户评价*/
const testimonials = [
  {
    testimonial: "很好，专业，效率极高，很满意！",
    name: "黑桃9",
    designation: "Sr. Data Analyst",
    company: "****",
    image: avatar1,
    linkedin: "https://www.linkedin.com",
  },
  {
    testimonial: "很满意，响应及时，需求理解也到位，强烈推荐",
    name: "icon周",
    designation: "ML Engineer",
    company: "****",
    image: avatar3,
    linkedin: "https://www.linkedin.com",
  },
  {
    testimonial: "按时完成，对需求把握准确",
    name: "衡山阳光",
    designation: "Data Scientist",
    company: "****",
    image: avatar2,
    linkedin: "https://www.linkedin.com/in",
  },
  {
    testimonial: "需求梳理完成，合作愉快",
    name: "胖虎Nick",
    designation: "AI Developer",
    company: "****",
    image: avatar2,
    linkedin: "https://www.linkedin.com/in",
  },
  {
    testimonial: "强烈推荐！沟通顺畅，非常了解产品业务！希望下次继续合作",
    name: "暖暖的小羊",
    designation: "Tutor ML Engineer",
    company: "****",
    image: avatar4,
    linkedin: "https://www.linkedin.com/in",
  },
  {
    testimonial: "服务意识非常好，工作态度很好，做事耐心认真",
    name: "xiaohei1128",
    designation: "Data Scientist",
    company: "****",
    image: avatar1,
    linkedin: "https://www.linkedin.com/in",
  },
];

export {
  navLinks,
  profiles,
  services,
  experiences,
  technologies,
  projects,
  testimonials,
};
