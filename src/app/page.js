"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwner name="Phiphatphong Kawindong" id="650610792" text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207" like="100 คน"/>

        {/* Comment Example */}
        {comments.map((Com) => (
          <Comment
            userImagePath={Com.userImagePath}
            username={Com.username}
            commentText={Com.commentText}
            likeNum={Com.likeNum}
            replies={Com.replies}
            key={Com.id}
          />
        ))}
        
        
      </div>
    </div>
  );
}
