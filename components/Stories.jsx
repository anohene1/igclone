import { useEffect, useState } from 'react'
import Story from './Story'
import { data } from 'autoprefixer'

function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(function () {
    fetch('https://randomuser.me/api/?results=20')
      .then((response) => response.json())
      .then((data) => {
        const users = data.results.map((user) => ({
          id: user.login.uuid,
          username: user.login.username,
          avatar: user.picture.medium,
        }))
        setSuggestions(users)
      })
  }, [])

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8
    border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black"
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
