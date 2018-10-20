const ap = new APlayer({
    container: document.getElementById('player'),
    fixed: true,
    theme: '#FADFA3', //主题色
    loop: 'all', //音频循环播放, 可选值: 'all'全部循环, 'one'单曲循环, 'none'不循环
    order: 'list', //音频循环顺序, 可选值: 'list'列表循环, 'random'随机循环
    preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    volume: 0.7, //默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
    mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    listFolded: false, //列表默认折叠
    listMaxHeight: 90, //列表最大高度
    lrcType: 3, //歌词传递方式
    audio: [
        {
        name: '21 Guns',
        artist: 'Green Day',
        url: 'http://ox33lq08p.bkt.clouddn.com/Green%20Day%20-%2021%20Guns.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/21Guns.jpg'
    },
    {
        name: 'Swing,Swing',
        artist: 'The All-American Rejects',
        url: 'http://ox33lq08p.bkt.clouddn.com/Swing,%20Swing%20-%20The%20All-American%20Rejects.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/aar.jpg'
    },
    {
        name: '孤独的自由',
        artist: '玫瑰木子弹',
        url: 'http://ox33lq08p.bkt.clouddn.com/%E5%AD%A4%E7%8B%AC%E7%9A%84%E8%87%AA%E7%94%B1%20-%20%E6%9D%8E%E5%8D%9A_%E7%8E%AB%E7%91%B0%E6%9C%A8%E5%AD%90%E5%BC%B9.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/%E7%8E%AB%E7%91%B0%E6%9C%A8%E5%AD%90%E5%BC%B9.jpg'
    }
  ]
});


