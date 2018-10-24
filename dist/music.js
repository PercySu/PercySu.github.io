const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [
      {
        name: "21 Guns",
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
      },
      {
        name: 'It Ends Tonight',
        artist: 'The All-American Rejects',
        url: 'http://ox33lq08p.bkt.clouddn.com/It%20Ends%20Tonight.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/aar_1.jpg'
      },
      {
        name: 'Dirty Little Secrets',
        artist: 'The All-American Rejects',
        url: 'http://ox33lq08p.bkt.clouddn.com/Dirty%20Little%20Secret.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/aar_movealong.jpg'
      },
      {
        name: '玫瑰·子弹',
        artist: '玫瑰木子弹',
        url: 'http://ox33lq08p.bkt.clouddn.com/%E7%8E%AB%E7%91%B0%E2%96%AA%E5%AD%90%E5%BC%B9%20-%20%E6%9D%8E%E5%8D%9A_%E7%8E%AB%E7%91%B0%E6%9C%A8%E5%AD%90%E5%BC%B9.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/%E7%8E%AB%E7%91%B0%E6%9C%A8%E5%AD%90%E5%BC%B9.jpg'
      },
      {
        name: 'Days Killer',
        artist: 'Apple Pie',
        url: 'http://ox33lq08p.bkt.clouddn.com/%E8%8B%B9%E6%9E%9C%E6%B4%BE%E4%B9%90%E9%98%9F%20-%20%E6%97%B6%E5%85%89%E6%9D%80%E6%89%8B%EF%BC%88%E4%B8%AD%E6%96%87%EF%BC%89.mp3',
        cover: 'http://ox33lq08p.bkt.clouddn.com/ApplePie.jpg'
      }
    ]
});