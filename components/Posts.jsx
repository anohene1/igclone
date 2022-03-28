import Post from './Post'
import { useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'

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
  const [posts, setPosts] = useState([])

  useEffect(
    function () {
      return onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      )
    },
    [db]
  )

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().userImg}
          img={post.data().img}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
