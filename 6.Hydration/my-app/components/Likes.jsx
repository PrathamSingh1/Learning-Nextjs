"use client"

import { useState } from "react"

export default function Likes() {

  const [likeCount, setLikeCount] = useState(0);

  // console.log(window);
  // console.log("Hello Like component")
  return (
    <div onClick={() => {
      setLikeCount((prev) => prev + 1);
    }}>{likeCount} Likes</div>
  )
}
