/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "网站",
    sites: [
      {
        title: "尘封记忆",
        description: "ChenFeng'S WebSite",
        url: "http://chen.pp.ua/",
        icon: "",
        color: "#0171CD",
      },
      {
        title: "尘封云",
        description: "ChenFeng'S Alist",
        url: "http://alist.pp.ua/",
        icon: "",
      },
      {
        title: "尘封导航",
        description: "ChenFeng'S Nav",
        url: "https://inav.pp.ua/",
        icon: "",
      },
    ],
  },
  {
    title: "服务",
        sites: [
      {
        title: "ChenFeng'S WebSite",
        description: "尘封记忆",
        url: "https://chen.pp.ua",
        icon: "https://cfx.pp.ua/x/cfstudio.png",
      },
    ],
  },
  {
    title: "收藏",
  },
  {
    title: "友链",
    sites: [
      {
        title: "ChenFeng'S WebSite",
        description: "尘封记忆",
        url: "https://chen.pp.ua",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "尘封记忆",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://chen.pp.ua",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/EsunR",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "尘封ICP证000001号",
  ICP_URL: "https://inav.pp.ua/",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "尘封导航",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
