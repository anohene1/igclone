function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] w-16 h-16"
        src="https://pbs.twimg.com/profile_images/1476564746157572102/BouxYxck_400x400.jpg"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">hecker</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile
