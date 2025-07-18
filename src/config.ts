export default {
  // 网站标题
  Title: "Sᴜᴘᴇʀᴍᴀ'∫Bʟᴏɢ",
  // 网站地址
  Site: 'https://luyao88.com',
  // 网站副标题  不曾与你分享的时间,我在进步
  Subtitle: '马亚洲的博客',
  // 网站描述
  Description:
    'Superma博客 专注于全栈开发与游戏引擎相关技术的实战学习分享，涵盖Java、H5、JS、Unity、Cocos等，并涉及Node、Python、Linux、等领域。同时，博客也分享作者的生活、音乐和旅行的热爱。',
  // 网站作者中心位置
  Author: '.🆂🆄🅿🅴🆁🅼🅰',
  // 作者头像中心位置
  Avatar: '/assets/images/banner/190d35ddbd69a821.webp',
  // 作者头像左侧位置
  Avatar2: '/assets/images/avator2.webp',
  // 网站座右铭左侧
  Motto: ' 世上的人遍地都是，说的着的人千里难寻',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p><p>这里会分享我的日常和学习中的收集、整理及总结，希望能对你有所帮助:) 💖</p>',
  // 首页打字机文案列表 不曾与你分享的时间,我在进步. I am making progress in the time I haven't shared with you.
  TypeWriteList: [
    '暗处生长，静待光芒.',
    'Silent growth beneath the dark, waiting to bloom in the light.',
  ],
  // 网站创建时间
  CreateTime: '2021-04-22',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true, //是否开启banner
    // 首页高度  '58.88rem', 100vh全浏览器屏幕
    HomeHeight: '100vh',
    // 其他页面高度
    PageHeight: '28.88rem',
    //首页播放视频 /assets/video/bg_1.mp4
    backgroundVideo: '',
    // 默认其他页面背景图片  //homeBnaner_02.jpg
    backgroundImg: '/assets/images/homeBnaner_02.jpg',
    // "url('/assets/images/home-banner.webp') no-repeat center 70%/cover",
    //"url('/assets/images/1751364092817.jpg') no-repeat center 70%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色()  rgb(3, 182, 170) #ff83a4ff #cd1a63
    '--vh-main-color': '#e9819d',
    // 字体颜色
    '--vh-font-color': ' #34495e',
    // 侧边栏宽度
    '--vh-aside-width': '318px',
    // 全局圆角
    '--vh-main-radius': '0.88rem',
    // 主体内容宽度  '1458px',
    '--vh-main-max-width': '1458px',
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG  // 为每个导航添加背景图片
    {
      text: '朋友',
      link: '/links',
      icon: 'Nav_friends',
    },
    {
      text: '圈子',
      link: '/friends',
      icon: 'Nav_rss',
    },
    {
      text: '动态',
      link: '/talking',
      icon: 'Nav_talking',
    },
    {
      text: '昔日',
      link: '/archives',
      icon: 'Nav_archives',
    },
    {
      text: '留言',
      link: '/message',
      icon: 'Nav_message',
    },
    {
      text: '关于',
      link: '/about',
      icon: 'Nav_about',
    },
    {
      text: 'API',
      link: 'https://api.vvhan.com/',
      target: true,
      icon: 'Nav_link',
    },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    // {
    //   text: 'Github',
    //   link: 'https://github.com/luyao88',
    //   icon: 'WebSite_github',
    // },
    // { text: '韩小韩API', link: 'https://api.vvhan.com', icon: 'WebSite_api' },
    // { text: '每日热榜', link: 'https://hot.vvhan.com', icon: 'WebSite_hot' },
    // {
    //   text: '骤雨重山图床',
    //   link: 'https://wp-cdn.4ce.cn',
    //   icon: 'WebSite_img',
    // },
    // {
    //   text: 'HanAnalytics',
    //   link: 'https://analytics.vvhan.com',
    //   icon: 'WebSite_analytics',
    // },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true,
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com',
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: false,
      envId: '',
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: '',
    },
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: {
    enable: true,
    server: 'https://analytics.vvhan.com',
    siteId: 'Hello-HanHexoBlog',
  },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '/assets/images/alipay.webp',
    // 微信收款码
    WeChat: '/assets/images/wechat.webp',
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url',
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666,
}
