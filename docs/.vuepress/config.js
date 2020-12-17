module.exports = {
  description: 'Mozilla Developer Network',
  themeConfig: {
    logo: '/assets/img/logo.svg',
    lastUpdated: 'Last Updated',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'Huauauaa/read-mdn',
    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'Huauauaa/read-mdn',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
        algolia: {},
        nav: [
          {
            text: 'Technologies',
            ariaLabel: 'Technologies menu',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript/',
              },
            ],
          },
          {
            text: 'Reference & Guide',
            ariaLabel: 'Reference & Guide menu',
            items: [
              { text: 'Reference', link: '/reference/' },
              { text: 'Guide', link: '/guide/' },
            ],
          },
          { text: 'Feedback', link: '/feedback/' },
        ],
        sidebar: [
          {
            title: 'JavaScript',
            path: '/JavaScript/',
            children: [
              {
                title: 'Built-in objects',
                path: '/JavaScript/Built-in objects/',
                children: [
                  '/JavaScript/Built-in objects/AggregateError',
                  '/JavaScript/Built-in objects/Array',
                  '/JavaScript/Built-in objects/ArrayBuffer',
                ],
              },
            ],
          },
        ],
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: '发现新内容可用.',
            buttonText: '刷新',
          },
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          {
            text: '技术',
            ariaLabel: '技术 菜单',
            items: [
              {
                text: 'JavaScript',
                link: '/JavaScript/',
              },
            ],
          },
          {
            text: '参考与指南',
            ariaLabel: '参考与指南 菜单',
            items: [
              { text: '参考', link: '/reference/' },
              { text: '指南', link: '/guide/' },
            ],
          },
          { text: '反馈', link: '/feedback/' },
        ],
        sidebar: [
          {
            title: 'JavaScript',
            path: '/zh/JavaScript/',
            children: [
              {
                title: '内置对象',
                path: '/zh/JavaScript/Built-in objects/',
                children: [
                  '/zh/JavaScript/Built-in objects/AggregateError',
                  '/zh/JavaScript/Built-in objects/Array',
                  '/zh/JavaScript/Built-in objects/ArrayBuffer',
                ],
              },
            ],
          },
        ],
      },
    },
  },
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MDN',
      description: 'Mozilla Developer Network',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '网络开发文档',
      description: '网络技术开发文档',
    },
  },
};
