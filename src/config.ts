export const SITE = {
  website: "https://astro-paper.pages.dev/",
  author: "小明",
  desc: "真实才是最酷的，带你发现自以为不错的信息。",
  title: "红色回形针",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/satnaing/astro-paper/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "zh-CN",
  timezone: "Asia/Shanghai",

  // ✨ 添加这段 profile 配置
  profile: {
    name: "小明",
    image: "avatar.png",
    bio: "喜欢记录，也热衷发现新鲜事。",
  },
} as const;
