import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'lmao',
    userImg:
      'https://pbs.twimg.com/profile_images/1476564746157572102/BouxYxck_400x400.jpg',
    img: 'https://pbs.twimg.com/profile_images/1476564746157572102/BouxYxck_400x400.jpg',
    caption: 'Cool stuff',
  },
  {
    id: '133',
    username: 'hecker',
    userImg:
      'https://pbs.twimg.com/profile_images/1476564746157572102/BouxYxck_400x400.jpg',
    img: 'https://pbs.twimg.com/profile_images/1476564746157572102/BouxYxck_400x400.jpg',
    caption: 'Vhim chale',
  },
]

function Posts(props) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
