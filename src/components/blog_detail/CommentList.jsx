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
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment,
  );

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
              replies: [
                ...comment.replies,
                { id: Date.now(), author: "Bạn", reply: replyText },
              ],
            }
          : comment,
      ),
    );

    setReplyText("");
  };

  return (
    <div className="mx-auto mt-6 w-full md:w-200">
      <h2 className="mb-4 text-lg font-medium text-black">
        BÌNH LUẬN ({comments.length})
      </h2>

      {currentComments.map((comment) => (
        <div key={comment.id} className="mb-8 rounded-md">
          <div className="mb-2 flex rounded bg-gray-100 px-4 py-2 text-sm text-gray-500 italic">
            <span className="mr-1 md:mr-10">
              Bình luận bởi {comment.author}
            </span>
            <span>| {comment.time}</span>
            <span
              className="ml-auto cursor-pointer text-gray-800 underline"
              onClick={() => toggleReplies(comment.id)}
            >
              Trả lời
            </span>
          </div>
          <p className="mb-2 px-4 text-sm text-gray-600">{comment.content}</p>

          {/* Hiển thị replies và ô nhập phản hồi chỉ khi toggleReplies được bật */}
          {visibleReplies[comment.id] && (
            <div className="mt-0 ml-6 rounded-md p-2 text-sm text-gray-500">
              {comment.replies.length > 0 && (
                <div className="mt-2 border-l pl-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="mb-2 text-sm text-gray-700">
                      <span className="font-semibold italic">
                        {reply.author}:
                      </span>{" "}
                      {reply.reply}
                    </div>
                  ))}
                </div>
              )}
              <div className="flex items-center gap-5">
                <textarea
                  className="h-10 w-full rounded-md border border-gray-300 p-2 text-sm"
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
