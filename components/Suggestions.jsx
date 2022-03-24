import { useEffect, useState } from 'react'
import Suggestion from './Suggestion'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(function () {
    fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((data) => {
        const users = data.results.map((user) => ({
          id: user.login.uuid,
          username: user.login.username,
          avatar: user.picture.medium,
          company: user.location.city,
        }))
        console.log(data.results)
        setSuggestions(users)
      })
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <Suggestion key={profile.id} profile={profile} />
      ))}
    </div>
  )
}

export default Suggestions
