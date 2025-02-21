import BlogCard from "../BlogCard";
import { blogs, tags } from "../../data/dummyData";
import wine from "../../assets/video/wine.mp4";

const BlogSide = ({ blog }) => {
  if (!blog) return null;
  console.log(blog);

  // Lọc 3 bài viết mới nhất, loại trừ bài hiện tại
  const relatedBlogs = blogs
    .filter((b) => Number(b.id) !== Number(blog.id))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="w-full text-gray-700 md:w-64 md:pr-4">
      {/* Blog */}
      <p className="mb-6 text-lg uppercase">Bài viết mới nhất</p>
      <div className="space-y-4">
        {relatedBlogs.map((b) => (
          <BlogCard key={b.id} size="sm" blog={b} />
        ))}
      </div>

      {/* Tag sản phẩm */}
      <h2 className="mt-8 pb-2 text-lg uppercase">Blog Tags</h2>
      <div className="mt-2 mb-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`border px-2 text-sm ${
              blog.tag === tag
                ? "border-yellow-500 bg-yellow-500 text-white"
                : "border-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="mt-6 mb-6 text-lg uppercase">Latest video</p>
      <video className="h-auto w-full" controls autoPlay loop muted>
        <source src={wine} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};

export default BlogSide;
