/**
 * Central translations file.
 * Rules: paper titles, author names, award titles, and venue names stay in English.
 * Everything else gets a Chinese equivalent.
 */
export const translations = {

  // ── Navigation ──────────────────────────────────────────────────────────────
  nav: {
    'Home':              { en: 'Home',              zh: '首页' },
    'Publications':      { en: 'Publications',      zh: '论文' },
    'Awards':            { en: 'Awards',            zh: '荣誉' },
    'Projects':          { en: 'Projects',          zh: '项目' },
    'Teaching & Service':{ en: 'Teaching & Service',zh: '教学与服务' },
    'Join Us':           { en: 'Join Us',           zh: '加入我们' },
  },

  // ── Hero section ────────────────────────────────────────────────────────────
  hero: {
    title: { en: 'Tonghan Wang', zh: '王同翰' },
    // Subtitle below the name (hero-1.json description)
    description: {
      en: '(王同翰) Incoming Tenure-Track Assistant Professor at the College of AI, Tsinghua University.',
      zh: '（Tonghan Wang）清华大学人工智能学院长聘教轨助理教授（即将入职）。',
    },
    descriptionLinks: {
      en: {
        'College of AI': 'https://collegeai.tsinghua.edu.cn/en/',
        'Tsinghua University': 'https://www.tsinghua.edu.cn/en/',
      },
      zh: {
        '清华大学人工智能学院': 'https://collegeai.tsinghua.edu.cn/en/',
      },
    },
    // PhD / ME bio paragraph
    bio: {
      en: 'I completed my PhD at Harvard University, advised by Prof. David Parkes and Prof. Milind Tambe, and my M.E. at the Institute for Interdisciplinary Information Sciences, Tsinghua University.',
      zh: '博士毕业于哈佛大学，师从 Prof. David Parkes 和 Prof. Milind Tambe；硕士毕业于清华大学交叉信息研究院。',
    },
    bioLinks: {
      en: {
        'Harvard University': 'https://www.harvard.edu/',
        'Institute for Interdisciplinary Information Sciences': 'https://iiis.tsinghua.edu.cn/en/',
        'Prof. David Parkes': 'https://parkes.seas.harvard.edu/',
        'Prof. Milind Tambe': 'https://teamcore.seas.harvard.edu/tambe/',
      },
      zh: {
        '哈佛大学': 'https://www.harvard.edu/',
        '清华大学交叉信息研究院': 'https://iiis.tsinghua.edu.cn/',
        'Prof. David Parkes': 'https://parkes.seas.harvard.edu/',
        'Prof. Milind Tambe': 'https://teamcore.seas.harvard.edu/tambe/',
      },
    },
    // "中文简介" link — hide in zh mode; show as "中文简介" only in en mode
    showChineseProfileLink: { en: true, zh: false },
    // Recruiting sentence (intro to research interests)
    recruiting: {
      en: "I am recruiting highly motivated (undergrad and graduate) students. Contact me by email if you're interested in the following questions:",
      zh: '欢迎有科研热情的（本科生及研究生）同学加入。若对以下方向感兴趣，欢迎通过邮件联系：',
    },
    // Research interest items
    problems: {
      en: [
        'Economics of generative models--for example, how LLMs sell advertisements and how tokens are priced.',
        'Agentic intelligence, especially systems involving multiple agents.',
        'Principled deep learning methods for solving fundamental problems in microeconomics.',
        'Modular control of a robot, treating each joint as an agent.',
      ],
      zh: [
        '生成模型的经济学——例如，大语言模型如何投放广告、词元如何定价。',
        '智能体，尤其是涉及多个智能体协作与交互的场景。',
        '有理论保证的深度学习方法，用于解决微观经济学中的基础性问题。',
        '将机器人的每个关节视为一个独立智能体，实现模块化控制。',
      ],
    },
    // Tooltip on the name
    tooltip: {
      en: "Pronunciation of Tonghan: the two syllables sound like 'tongue' and 'hahn.' Feel free to use any close approximation!",
      zh: "\"同翰\"的发音：两个音节分别近似英语中的 'tongue' 和 'hahn'，欢迎用任何接近的读法！",
    },
  },

  // ── News / Testimonial section ───────────────────────────────────────────────
  news: {
    heading: { en: 'News', zh: '动态' },
    // Indexed to match testimonial.json items array order
    items: [
      {
        name: {
          en: 'Honored to receive the 2025 Victor Lesser Distinguished Dissertation Award!',
          zh: '荣获 2025 年 Victor Lesser 杰出博士论文奖！',
        },
        highlight: { en: 'Victor Lesser Distinguished Dissertation Award', zh: 'Victor Lesser 杰出博士论文奖' },
        text: {
          en: "For my dissertation 'Advancing Deep Learning for Multi-agent AI: Mechanisms, Organizations, and Dynamics'.",
          zh: "获奖论文：《Advancing Deep Learning for Multi-agent AI: Mechanisms, Organizations, and Dynamics》。",
        },
        date: { en: 'Mar 2026', zh: '2026年3月' },
      },
      {
        name: {
          en: 'Our paper received a Spotlight at NeurIPS 2025!',
          zh: '论文获 NeurIPS 2025 Spotlight！',
        },
        text: {
          en: "Spotlight paper: 'Composite Flow Matching for Reinforcement Learning with Shifted-Dynamics Data', with Lingkai Kong, Haichuan Wang, Guojun Xiong, and Milind Tambe.",
          zh: "Spotlight 论文：《Composite Flow Matching for Reinforcement Learning with Shifted-Dynamics Data》，与 Lingkai Kong、Haichuan Wang、Guojun Xiong、Milind Tambe 合作。",
        },
        date: { en: 'Dec 2025', zh: '2025年12月' },
      },
      {
        name: {
          en: 'Our paper received an Oral presentation at AAAI 2025!',
          zh: '论文在 AAAI 2025 获口头报告（Oral）！',
        },
        text: {
          en: "Oral paper: 'The Bandit Whisperer: Communication Learning for Restless Bandits', with Yunfan Zhao, Dheeraj Mysore Nagaraj, Aparna Taneja, and Milind Tambe.",
          zh: "Oral 论文：《The Bandit Whisperer: Communication Learning for Restless Bandits》，与 Yunfan Zhao、Dheeraj Mysore Nagaraj、Aparna Taneja、Milind Tambe 合作。",
        },
        date: { en: 'Feb 2025', zh: '2025年2月' },
      },
      {
        name: {
          en: "Honored to announce that our paper has been awarded the 'Best Paper in AI Track' at ACM EC 2024!",
          zh: '荣获 ACM EC 2024 AI Track 最佳论文奖！',
        },
        highlight: { en: 'Best Paper in AI Track', zh: 'ACM EC 2024 AI Track 最佳论文奖' },
        text: {
          en: "Working with Yanchen Jiang and David Parkes, we tackled a long-standing problem in microeconomics. We developed the first strategy-proof, multi-bidder, and general auction design algorithm using deep learning.",
          zh: "与 Yanchen Jiang 和 David Parkes 合作，解决了微观经济学中一个长期悬而未决的难题——首次提出基于深度学习的策略防欺骗、多买方、通用拍卖设计算法。",
        },
        date: { en: 'Jul 2024', zh: '2024年7月' },
        link: { en: 'Press release', zh: '新闻稿' },
      },
      {
        name: {
          en: 'Discontinuous deep learning is gaining attention!',
          zh: '非连续深度学习正受到广泛关注！',
        },
        text: {
          en: "Our new paper is accepted by ICML 2024. In this paper, we extend discontinuous networks to handle discontinuous, piecewise non-linear utility functions in Bayesian persuasion problem.",
          zh: "新论文被 ICML 2024 录用。本文将非连续网络拓展至贝叶斯说服问题中的不连续、分段非线性效用函数场景。",
        },
        date: { en: 'Jul 2024', zh: '2024年7月' },
      },
    ],
  },

  // ── Publications page ────────────────────────────────────────────────────────
  publications: {
    banner:        { en: 'Publications',     zh: '论文' },
    abstractOpen:  { en: '+ Abstract',       zh: '+ 摘要' },
    abstractClose: { en: '− Abstract',       zh: '− 摘要' },
    // Keyed by publications.json category id
    categories: {
      preprint:   { en: 'Preprint Papers',   zh: '预印本' },
      conference: { en: 'Conference Papers', zh: '会议论文' },
      journal:    { en: 'Journal Papers',    zh: '期刊论文' },
      workshop:   { en: 'Workshop Papers',   zh: '研讨会论文' },
    },
  },

  // ── Teaching & Service page ──────────────────────────────────────────────────
  teaching: {
    banner:          { en: 'Teaching & Service', zh: '教学与服务' },
    sectionTeaching: { en: 'Teaching',           zh: '教学' },
    sectionService:  { en: 'Academic Service',   zh: '学术服务' },
    reviewer:        { en: 'Reviewer',           zh: '审稿人' },
    roles: {
      'Teaching Fellow':    { en: 'Teaching Fellow',    zh: '助教' },
      'Teaching Assistant': { en: 'Teaching Assistant', zh: '助教' },
    },
    institutions: {
      'Harvard University':  { en: 'Harvard University',  zh: '哈佛大学' },
      'Tsinghua University': { en: 'Tsinghua University', zh: '清华大学' },
    },
  },

  // ── Projects page ────────────────────────────────────────────────────────────
  projects: {
    banner:  { en: 'Research Projects', zh: '研究项目' },
    explore: { en: 'Explore →',         zh: '查看详情 →' },
  },

  // ── Awards page ──────────────────────────────────────────────────────────────
  awards: {
    banner: { en: 'Awards & Honors', zh: '荣誉与奖项' },
    // Keyed by awards-1.md list item label; labels themselves stay in English.
    values: {
      'Victor Lesser Distinguished Dissertation Award': {
        en: '<p>Autonomous Agents and Multiagent Systems (AAMAS)</p><p> <br/> </p>',
        zh: '<p>多智能体系统国际会议（AAMAS）颁发</p><p> <br/> </p>',
      },
      'NeurIPS 2025 Spotlight': {
        en: '<p>Spotlight paper, Conference on Neural Information Processing Systems, 2025</p><p> <br/> </p>',
        zh: '<p>Spotlight 论文，神经信息处理系统大会，2025 年</p><p> <br/> </p>',
      },
      'AAAI 2025 Oral': {
        en: '<p>Oral presentation, AAAI Conference on Artificial Intelligence, 2025</p><p> <br/> </p>',
        zh: '<p>Oral 论文，人工智能促进协会年会，2025 年</p><p> <br/> </p>',
      },
      'EC 2024 Best Paper Award': {
        en: '<p>AI Track, ACM Conference on Economics and Computation, 2024</p><p> <br/> </p>',
        zh: '<p>AI 方向，ACM 经济学与计算大会，2024 年</p><p> <br/> </p>',
      },
      'NeurIPS 2022 Spotlight': {
        en: '<p>Spotlight paper, Conference on Neural Information Processing Systems, 2022</p><p> <br/> </p>',
        zh: '<p>Spotlight 论文，神经信息处理系统大会，2022 年</p><p> <br/> </p>',
      },
      'ICLR 2022 Spotlight': {
        en: '<p>Spotlight paper, International Conference on Learning Representations, 2022</p><p> <br/> </p>',
        zh: '<p>Spotlight 论文，国际学习表征会议，2022 年</p><p> <br/> </p>',
      },
      'ICLR 2021 Outstanding Reviewer Award': {
        en: '<p>International Conference on Learning Representations, 2021</p><p> <br/> </p>',
        zh: '<p>国际学习表征会议，2021 年</p><p> <br/> </p>',
      },
      'National Scholarship at Tsinghua University': {
        en: '<p>Awarded to top 1% students at IIIS, Tsinghua University</p><p> <br/> </p>',
        zh: '<p>清华大学交叉信息研究院前 1% 学生</p><p> <br/> </p>',
      },
      'NeurIPS 2020 Spotlight': {
        en: '<p>Spotlight paper, Conference on Neural Information Processing Systems, 2020</p><p> <br/> </p>',
        zh: '<p>Spotlight 论文，神经信息处理系统大会，2020 年</p><p> <br/> </p>',
      },
      'ICLR 2020 Spotlight': {
        en: '<p>Spotlight paper, International Conference on Learning Representations, 2020</p><p> <br/> </p>',
        zh: '<p>Spotlight 论文，国际学习表征会议，2020 年</p><p> <br/> </p>',
      },
      'Outstanding Undergraduates at Shandong University': {
        en: '<p>Awarded to top 10 (0.05%) students at Shandong University</p><p> <br/> </p>',
        zh: '<p>山东大学优秀毕业生（全校前 10 名，约 0.05%）</p><p> <br/> </p>',
      },
      'National Scholarship at Shandong University': {
        en: '<p>Awarded to top 1% students at Shandong University</p><p> <br/> </p>',
        zh: '<p>山东大学国家奖学金，前 1% 学生</p><p> <br/> </p>',
      },
      'Principal Scholarship': {
        en: '<p>Awarded to top 18 of 40000 (0.05%) students at Shandong University</p><p> <br/> </p>',
        zh: '<p>山东大学校长奖学金，全校 4 万名学生中前 18 名（0.05%）</p><p> <br/> </p>',
      },
      'First Class Scholarship 2015-2017': {
        en: '<p>Top 1 student at Taishan Academy, a special honors program at Shandong University</p><p> <br/> </p>',
        zh: '<p>山东大学泰山学堂（荣誉实验班）第 1 名</p><p> <br/> </p>',
      },
    },
  },

  // ── Join Us / Contact page ───────────────────────────────────────────────────
  contact: {
    banner:  { en: 'Join Us',           zh: '加入我们' },
    write:   { en: 'Write: ',           zh: '邮件：' },
    dropIn:  { en: 'Drop in: ',         zh: '办公室：' },
    address: { en: 'Office 5.421, 150 Western Ave, Allston', zh: '哈佛大学，150 Western Ave，5.421 室，Allston' },
  },

  // ── Call-to-action ───────────────────────────────────────────────────────────
  cta: {
    button: { en: 'Contact me', zh: '联系我' },
  },

  // ── Footer ───────────────────────────────────────────────────────────────────
  footer: {
    copy: {
      en: '© 2026. Tonghan Wang. All rights reserved.',
      zh: '© 2026. 王同翰. 版权所有。',
    },
  },

  // ── 404 page ─────────────────────────────────────────────────────────────────
  notFound: {
    title:      { en: 'Page not found',             zh: '页面未找到' },
    subtitle:   { en: 'Oops! Something went wrong :(', zh: '抱歉，出了些问题 :(' },
    circleText: { en: 'Go back to the homepage - ', zh: '返回主页 - ' },
  },
};

/** Convenience: given a nested translation entry {en, zh}, pick the right language. */
export function pick(entry, lang) {
  return entry?.[lang] ?? entry?.en ?? '';
}
