import BlogCard from "../BlogCard";
import { blogs, tags } from "../../data/dummyData";
import wine from "../../assets/video/wine.mp4";

const BlogSide = ({ blog }) => {
  if (!blog) return null;
  console.log(blog);

  // Lọc 3 bài viết mới nhất, loại trừ bài hiện tại
  const relatedBlogs = blogs.filter((b) => Number(b.id) !== Number(blog.id))
  .sort((a, b) => new Date(b.date) - new Date(a.date))
  .slice(0, 3);

  return (
    <div className="w-64 pr-4 text-gray-700">
      {/* Blog */}
      <p className="uppercase text-lg mb-6">Bài viết mới nhất</p>
      <div className="space-y-4">
        {relatedBlogs.map((b) => (
          <BlogCard key={b.id} size="small" blog={b} />
        ))}
      </div>

      {/* Tag sản phẩm */}
      <h2 className="text-lg pb-2 mt-8 uppercase">Blog Tags</h2>
      <div className="mt-2 mb-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`px-2 text-sm border ${
              blog.tag === tag
                ? "bg-yellow-500 text-white border-yellow-500"
                : "border-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="uppercase text-lg mt-6 mb-6">Latest video</p>
      <video className="w-full h-auto" controls autoPlay loop muted>
        <source src={wine} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
};

export default BlogSide;
