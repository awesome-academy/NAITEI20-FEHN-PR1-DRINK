import React, { useState } from "react";
import Pagination from "../Pagination";
import { Button } from "../Button";
import { commentsData } from "../../data/dummyData";

const CommentList = () => {
  const [comments, setComments] = useState(commentsData);
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [visibleReplies, setVisibleReplies] = useState({});

  // Phân trang
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleReplies = (id) => {
    setVisibleReplies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setReplyingTo(id === replyingTo ? null : id);
    setReplyText("");
  };

  const handleReplySubmit = () => {
    if (!replyText.trim()) {
      return;
    }

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === replyingTo
          ? {
              ...comment,
              replies: [...comment.replies, { id: Date.now(), author: "Bạn", reply: replyText }],
            }
          : comment
      )
    );

    setReplyText("");
  };

  return (
    <div className="w-200 mx-auto mt-6">
      <h2 className="text-lg font-medium mb-4 text-black">BÌNH LUẬN ({comments.length})</h2>

      {currentComments.map((comment) => (
        <div key={comment.id} className="mb-8 rounded-md">
          <div className="flex text-sm italic bg-gray-100 px-4 py-2 rounded text-gray-500 mb-2">
            <span className="mr-10">Bình luận bởi {comment.author}</span>
            <span>| {comment.time}</span>
            <span
              className="text-gray-800 underline cursor-pointer ml-auto"
              onClick={() => toggleReplies(comment.id)}
            >
              Trả lời
            </span>
          </div>
          <p className="px-4 text-gray-600 text-sm mb-2">{comment.content}</p>

          {/* Hiển thị replies và ô nhập phản hồi chỉ khi toggleReplies được bật */}
          {visibleReplies[comment.id] && (
            <div className="ml-6 mt-0 text-sm p-2 rounded-md text-gray-500">
              {comment.replies.length > 0 && (
                <div className="border-l pl-4 mt-2">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="text-sm mb-2 text-gray-700">
                      <span className="italic font-semibold">{reply.author}:</span> {reply.reply}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-5">
                <textarea
                  className="w-full h-10 p-2 border border-gray-300 rounded-md text-sm"
                  rows="2"
                  placeholder="Nhập câu trả lời của bạn..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                ></textarea>
                <Button className="rounded" onClick={handleReplySubmit}>
                  Gửi
                </Button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <Pagination
        totalItems={comments.length}
        itemsPerPage={commentsPerPage}
        currentPage={currentPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default CommentList;
