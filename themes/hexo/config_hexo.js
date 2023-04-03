const CONFIG_HEXO = {
  HOME_BANNER_ENABLE: true,
  HOME_BANNER_GREETINGS: ['vx公众号：一个大叔', '大道至简，实干为要！', 'Hi，我是一个干饭人', '欢迎来到我的博客🎉'], // 首页大图标语文字

  HOME_NAV_BUTTONS: true, // 首页是否显示分类大图标按钮
  HOME_NAV_BACKGROUND_IMG_FIXED: true, // 首页背景图滚动时是否固定，true 则滚动时图片不懂； false则随鼠标滚动
  
  
  NEXT PUBLIC WALINE SERVER URL: 'https://waline-is-the-best-system.zeabur.app',//评论插件
  
  
 
waline:
  enable: true #是否开启
  serverURL: waline-is-the-best-system.zeabur.app
  placeholder: 请文明评论呀 
  avatar: mm 
  meta: [nick, mail, link] 
  pageSize: 10 // 评论数量多少时显示分页
  lang: zh-cn // 语言, 可选值: en, zh-cn
  // Warning: 不要同时启用 `waline.visitor` 以及 `leancloud_visitors`.
  visitor: false // 文章阅读统计
  comment_count: true // 如果为 false , 评论数量只会在当前评论页面显示, 主页则不显示
  requiredFields: [] // 设置用户评论时必填的信息，[nick,mail]: [nick] | [nick, mail]
  libUrl: // Set custom library cdn url




  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: true, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG_HEXO
