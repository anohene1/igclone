import React from 'react'

function Suggestion({ profile }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <img
        className="rounded-full w-10 h-10 border p-[2px]"
        src={profile.avatar}
        alt={profile.username}
      />

      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{profile.username}</h2>
        <h3 className="text-xs text-gray-400">Works at {profile.company}</h3>
      </div>

      <button className="text-blue-400 text-xs font-bold">Follow</button>
    </div>
  )
}

export default Suggestion
