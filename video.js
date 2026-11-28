 const videos = {
      latest: [],
      education: [
        {
          title: "My Education Video",
          type: "video",
          videoUrl:"https://cdn2.slicedrive.com/7drUqQEV1.mp4#t=0.1",
          thumbnail:"https://ibb.co/wZzRRJ3bhttps://ibb.co/wZzRRJ3b",
      parts:[
        {title:"part 1",
          videoUrl:"https://cdn2.slicedrivp.com/videos/18649.mp4",
          thumbnail:"https://picsum.photos/1600/900?random=22"
        },
        {title:"part2",
          videoUrl:"https://cdn2.slicedrivp.com/videos/18976.mp4",
          thumbnail:"https://picsum.photos/1600/900?random=22"
        }
      ]
        },
        {
          title: "My Own Video 1",
          type: "video",
          videoUrl: "https://pixeldrain.com/api/file/6YsTpYuY",
          thumbnail:"https://picsum.photos/id/1015/400/225"
        },
        {
          title: "My Own Video 2",
          type: "video",
          videoUrl: "https://cdn2.slicedrivp.com/videos/18976.mp4",
          thumbnail:"https://picsum.photos/id/1015/400/225"
        }
      ],
      entertainment: [
        {
          title: "My Entertainment Video",
          type: "video",
          videoUrl: "https://cdn2.slicedrivp.com/videos/18649.mp4",
          thumbnail:"https://picsum.photos/id/1015/400/225"
              }
      ]
    };
videos.latest = [...videos.education, ...videos.entertainment]
  .sort((a, b) => new Date(b.date) - new Date(a.date));

