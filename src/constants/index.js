import {
  agency,
  mobile,
  backend,
  creator,
  dataanalyst,
  vehicleclassification,
  cryptocurrency,
  programmer,
  entrepreneur,
  productive,
  ai,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  xinerlink,
  //tesla,
  anyoneai,
  //shopify,
  freqtrade,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  dart,
  android,
  learning,
  creditguard,
  moviesreview,
  pythondeveloper,
  machinelearningengineer,
  cryptochallenge,
  vertexai,
  imageclassification,
  homecreditrisk,
  gentetoxica,
  fumanyi,
  topo,
  linkedin,
  freqtradeworks,
  cryptowebapp,
  fastapi,
  tensorflow,
  sql,
  aws,
  webapp,
  xiaoan,
  nuoyun,
  jsuttree,
  vuejs,
  flutter,
} from "../assets";

const profiles = {
  name: "Jarèd",
  position: "Javascript Developer",
  brief: "一名资深前端开发工程师",
  briefSub: "和AI应用探索者",
  surname: "Jarèd Li",
  icp: "X ICP备XXXXXX号",
};

/*导航栏*/
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
  // 在线简历
  // {
  //   id: "cv",
  //   title: "CV",
  //   url: "https://docs.google.com/document/d/1lwZV76onsyxAB1CbrkYEd6uhBP7iCh_zoh0ou9wFAX8/edit?usp=sharing",
  // },
  // 领英
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: linkedin,
    url: "https://www.linkedin.com/feed/", // youself linkedin url
  },
];

/*岗位*/
const services = [
  {
    id: "web",
    title: "大前端开发",
    icon: webapp,
  },
  {
    id: "nodejs",
    title: "Nodejs后端开发",
    icon: machinelearningengineer,
  },
  {
    id: "full",
    title: "全栈开发",
    icon: programmer,
  },
  {
    id: "ai",
    title: "AI应用开发",
    icon: ai,
  },
];

/*技术栈，注意列表长度小于14个，否则可能会出现Hero组件显示问题*/
const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
    experienceYears: "1",
  },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  //   experienceYears: "1",
  // },
  {
    name: "Dart",
    icon: dart,
    experienceYears: "1",
  },
  {
    name: "HTML 5",
    icon: html,
    experienceYears: "1",
  },
  {
    name: "CSS 3",
    icon: css,
    experienceYears: "1",
  },
  {
    name: "React JS",
    icon: reactjs,
    experienceYears: "1",
  },
  //{
  //  name: "Redux Toolkit",
  //  icon: redux,
  //  experienceYears: "1",
  //},
  {
    name: "Vue JS",
    icon: vuejs,
    experienceYears: "1",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
  // {
  //   name: "SQL",
  //   icon: sql,
  //   experienceYears: "1",
  // },
  {
    name: "git",
    icon: git,
    experienceYears: "1",
  },
  {
    name: "Three JS",
    icon: threejs,
    experienceYears: "1",
  },
  // {
  //   name: "Python",
  //   icon: python,
  //   experienceYears: "1",
  // },
  // {
  //   name: "FastAPI",
  //   icon: fastapi,
  //   experienceYears: "1",
  // },
  // {
  //   name: "Tensorflow",
  //   icon: tensorflow,
  //   experienceYears: "1",
  // },
  //{
  //  name: "figma",
  //  icon: figma,
  //  experienceYears: "1",
  //},
  {
    name: "Docker",
    icon: docker,
    experienceYears: "1",
  },
  // {
  //   name: "AWS",
  //   icon: aws,
  //   experienceYears: "1",
  // },
];

/* 工作经历 */
const experiences = [
  {
    title: "资深前端开发",
    company_name: "AAAA科技有限公司",
    icon: anyoneai,
    iconBg: "#182B56",
    date: "2022.2-2024.3",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug  修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了中台项目、小程序项目、后端项目，积累了丰富的saas小程序开发、中台项目开发、后端开发经验。",
    ],
  },
  {
    title: "全栈开发工程师",
    company_name: "BBBB科技有限公司",
    icon: xinerlink,
    iconBg: "#FFFFFF",
    date: "2018.12-2021.12",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug  修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了中台项目、小程序项目、后端项目，积累了丰富的saas小程序开发、中台项目开发、后端开发经验。",
    ],
  },
  {
    title: "移动APP开发工程师",
    company_name: "CCCC科技有限公司",
    icon: learning,
    iconBg: "#050816",
    date: "2016.3-2018.10",
    points: [
      "根据产品需求、UI设计稿完成前端开发任务，解决原有功能的浏览器兼容性问题。",
      "根据接口文档，完成前后端的联调，完成测试、验收过程中的 bug  修复",
      "参与Web前端开发、git等规范的制定，撰写开发、迭代功能文档",
      "在职期间，开发维护了中台项目、小程序项目、后端项目，积累了丰富的saas小程序开发、中台项目开发、后端开发经验。",
    ],
  },
];

/*用户评价*/
const testimonials = [
  {
    testimonial: "很好，专业，效率极高，很满意！",
    name: "Gonzalo Diez",
    designation: "Sr. Data Analyst",
    company: "Mondelēz",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/gonzalo-damian-diez/",
  },
  {
    testimonial: "很满意，响应及时，需求理解也到位，强烈推荐",
    name: "Matías Reyes",
    designation: "ML Engineer",
    company: "AnyoneAI",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/developer-matias-reyes/",
  },
  {
    testimonial: "按时完成，对需求把握准确",
    name: "Jhonatan Camasca",
    designation: "Data Scientist",
    company: "Deloitte",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/jhonatancamasca/",
  },
  {
    testimonial: "需求梳理完成，合作愉快",
    name: "Lucio Rapetti",
    designation: "AI Developer",
    company: "AnyoneAI",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/lucio-f-rapetti-ab619235/",
  },
  {
    testimonial: "强烈推荐！沟通顺畅，非常了解产品业务！希望下次继续合作",
    name: "Yessid Rios",
    designation: "Tutor ML Engineer",
    company: "AnyoneAI",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/yessid-rios-prada/",
  },
  {
    testimonial: "服务意识非常好，工作态度很好，做事耐心认真",
    name: "Fabian Moreno",
    designation: "Data Scientist",
    company: "AnyoneAI",
    image: freqtrade,
    linkedin: "https://www.linkedin.com/in/fabianmorenodata/",
  },
];

/*项目经历*/
const projects = [
  {
    name: "信用风险分析",
    description:
      "由机器学习模型支持的API服务，该模型将接受财务配置文件，并能够预测该配置文件的信用风险评分。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "FastAPI",
        color: "tag-green-white-gradient-darker",
      },
      {
        name: "Scikit-learn",
        color: "tag-blue-orange-gradient-darker",
      },
      {
        name: "Pandas",
        color: "tag-purple-pink-gradient-dark",
      },
      {
        name: "Numpy",
        color: "tag-cyan-teal-gradient-dark",
      },
      {
        name: "HTML",
        color: "tag-gold-orange-gradient-dark",
      },
      {
        name: "CSS",
        color: "tag-red-purple-gradient-dark",
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
      {
        name: "Jupyter Notebook",
        color: "tag-teal-purple-gradient-darker",
      },
    ],
    image: creditguard,
    source_code_link: "https://github.com/tutecode/credit-risk-analysis",
    category: "AI",
  },
  {
    name: "车辆分类",
    description:
      "开发用于从图像中自动识别车辆制造和模型的机器学习模型，增强用户体验并节省汽车库存管理系统的时间。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Tensorflow",
        color: "tag-deep-purple-indigo-gradient-darker",
      },
      {
        name: "Jupyter Notebook",
        color: "tag-teal-purple-gradient-darker",
      },
      {
        name: "Docker",
        color: "tag-orange-pink-gradient-dark",
      },
    ],
    image: vehicleclassification,
    source_code_link: "https://github.com/tutecode/vehicle-classification",
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
    image: imageclassification,
    source_code_link: "https://github.com/tutecode/image-classification-ml-api",
    category: "AI",
  },
  {
    name: "首页信用违约风险",
    description:
      "二元分类项目：预测贷款偿还能力。模型确定客户是否会有支付困难，使用ROC-AUC作为概率预测的评估指标。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Jupyter Notebook",
        color: "tag-teal-purple-gradient-darker",
      },
      {
        name: "Scikit-learn",
        color: "tag-blue-orange-gradient-darker",
      },
      {
        name: "Pandas",
        color: "tag-purple-pink-gradient-dark",
      },
      {
        name: "Numpy",
        color: "tag-cyan-teal-gradient-dark",
      },
    ],
    image: homecreditrisk,
    source_code_link: "https://github.com/tutecode/home-credit-default-risk",
    category: "AI",
  },
  {
    name: "贸易策略",
    description:
      "为金融市场开发算法交易策略，利用数据分析和自动化做出明智的买卖决策并优化投资组合性能。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Scikit-learn",
        color: "tag-blue-orange-gradient-darker",
      },
      {
        name: "Pandas",
        color: "tag-purple-pink-gradient-dark",
      },
      {
        name: "Numpy",
        color: "tag-cyan-teal-gradient-dark",
      },
    ],
    image: freqtradeworks,
    source_code_link: "https://github.com/tutecode/freq-strategies",
    category: "AI",
  },
  {
    name: "加密价格网",
    description:
      "使用Streamlight创建加密货币网络应用程序，具有漂亮的视觉效果和交互式元素，可在跟踪和分析数字资产方面提供用户友好的体验。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "Pandas",
        color: "tag-purple-pink-gradient-dark",
      },
      {
        name: "BeautifulSoup4",
        color: "tag-cyan-teal-gradient-dark",
      },
    ],
    image: cryptowebapp,
    source_code_link:
      "https://github.com/tutecode/Cryptocurrency-Price-Web-App",
    category: "AI",
  },
  {
    name: "营销系统",
    description:
      "Web应用程序，由Django和React提供支持，专为营销机构设计。它具有安全的登录系统、强大的数据库管理和用于分享行业见解和更新的动态博客",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "JavaScript",
        color: "tag-yellow-gradient-dark",
      },
      {
        name: "Django",
        color: "tag-red-pink-gradient-darker",
      },
      {
        name: "ReactJS",
        color: "tag-indigo-blue-gradient-dark",
      },
      {
        name: "Tailwind",
        color: "tag-blue-cyan-gradient-dark",
      },
    ],
    image: agency,
    source_code_link:
      "https://github.com/tutecode/FullStack-with-Django-and-React",
    category: "web_development",
  },
  {
    name: "加密货币交易平台",
    description:
      "在发布后的12月23日至12月31日期间，使用三个数据集（交易、用户、账户）评估Mercado Libre Brasil新推出的加密货币计划。",
    tags: [
      {
        name: "Power BI",
        color: "tag-light-blue-indigo-gradient-darker",
      },
      {
        name: "Tableau",
        color: "tag-amber-red-gradient-darker",
      },
    ],
    image: cryptochallenge,
    source_code_link: "https://www.youtube.com/watch?v=sBd1Av86CiI",
    category: "web_development",
  },
  {
    name: "电影评论网站",
    description:
      "一个NLP项目：专注于电影评论二元情感分析的预处理，将它们分为正面或负面。",
    tags: [
      {
        name: "Python",
        color: "tag-blue-yellow-gradient-darker",
      },
      {
        name: "NLP",
        color: "tag-cyan-teal-gradient",
      },
      {
        name: "Jupyter Notebook",
        color: "tag-teal-purple-gradient-darker",
      },
      {
        name: "Docker",
        color: "tag-orange-pink-gradient-dark",
      },
    ],
    image: moviesreview,
    source_code_link:
      "https://github.com/tutecode/sentiment-analysis-on-movies-reviews/tree/main",
    category: "web_development",
  },
  {
    name: "人物应用",
    description:
      "一款总结贝尔纳多·斯塔法亚斯的书《有毒的人》的移动应用程序，可帮助您处理有毒的人，并在Play商店获得了超过一千次下载。",
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
    ],
    image: gentetoxica,
    source_code_link: "https://github.com/tutecode/gente_toxica_app",
    category: "mobile_app",
  },
  {
    name: "Fumanyi App",
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
    ],
    image: fumanyi,
    source_code_link: "https://github.com/tutecode/fumanyi_app/tree/master",
    category: "mobile_app",
  },
  {
    name: "Botonera Topo App",
    description:
      "体验终极音频音板移动应用程序。只需轻按一下即可轻松访问和播放各种可定制的声音剪辑，增强您的消息传递和娱乐",
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
    ],
    image: topo,
    source_code_link: "https://github.com/tutecode/botonera_topo_app",
    category: "mobile_app",
  },
];

export {
  profiles,
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
