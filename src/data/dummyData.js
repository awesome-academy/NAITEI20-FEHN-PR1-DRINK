import thumb from "../assets/images/thumb.jpg";
import blog from "../assets/images/blog.jpg";

export const users = [
  {
    id: 1,
    last_name: "Nguyen",
    first_name: "An",
    email: "an.nguyen@example.com",
    phone_number: "+84901234567",
    company: "VietTech",
    address: "123 Đường Lê Lợi",
    city: "Hà Nội",
    country: "Vietnam",
    zip_code: "100000",
  },
  {
    id: 2,
    last_name: "Tran",
    first_name: "Binh",
    email: "binh.tran@example.com",
    phone_number: "+84987654321",
    company: "Sun*",
    address: "456 Đường Nguyễn Trãi",
    city: "Hồ Chí Minh",
    country: "Vietnam",
    zip_code: "700000",
  },
  {
    id: 3,
    last_name: "Le",
    first_name: "Cuong",
    email: "cuong.le@example.com",
    phone_number: "+84905556677",
    company: "FPT Software",
    address: "789 Đường Hai Bà Trưng",
    city: "Đà Nẵng",
    country: "Vietnam",
    zip_code: "550000",
  },
  {
    id: 4,
    last_name: "Hoang",
    first_name: "Dung",
    email: "dung.hoang@example.com",
    phone_number: "+84903334455",
    company: "VNPT",
    address: "321 Đường Điện Biên Phủ",
    city: "Cần Thơ",
    country: "Vietnam",
    zip_code: "900000",
  },
  {
    id: 5,
    last_name: "Pham",
    first_name: "Em",
    email: "em.pham@example.com",
    phone_number: "+84902223344",
    company: "Mobifone",
    address: "654 Đường Lê Duẩn",
    city: "Hải Phòng",
    country: "Vietnam",
    zip_code: "180000",
  },
  {
    id: 6,
    last_name: "Dang",
    first_name: "Phong",
    email: "phong.dang@example.com",
    phone_number: "+84909998877",
    company: "VinGroup",
    address: "987 Đường Trần Phú",
    city: "Nha Trang",
    country: "Vietnam",
    zip_code: "650000",
  },
  {
    id: 7,
    last_name: "Bui",
    first_name: "Hai",
    email: "hai.bui@example.com",
    phone_number: "+84904445566",
    company: "Techcombank",
    address: "111 Đường Phạm Văn Đồng",
    city: "Hà Nội",
    country: "Vietnam",
    zip_code: "100000",
  },
  {
    id: 8,
    last_name: "Vo",
    first_name: "Hanh",
    email: "hanh.vo@example.com",
    phone_number: "+84901112233",
    company: "ACB",
    address: "222 Đường Hoàng Diệu",
    city: "Hồ Chí Minh",
    country: "Vietnam",
    zip_code: "700000",
  },
  {
    id: 9,
    last_name: "Duong",
    first_name: "Khoa",
    email: "khoa.duong@example.com",
    phone_number: "+84906667788",
    company: "BIDV",
    address: "333 Đường Lý Thường Kiệt",
    city: "Đà Nẵng",
    country: "Vietnam",
    zip_code: "550000",
  },
  {
    id: 10,
    last_name: "To",
    first_name: "Linh",
    email: "linh.to@example.com",
    phone_number: "+84905556699",
    company: "VPBank",
    address: "444 Đường Nguyễn Văn Cừ",
    city: "Hải Phòng",
    country: "Vietnam",
    zip_code: "180000",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Vang Thăng Long Classic",
    author: "Duong",
    date: "2025-02-12",
    commentsCount: 60,
    description:
      ` Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ Thăng Long
    tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai
    dung tích 750 ml.`.repeat(10),
    image: thumb,
    tag: "Wine",
  },
  {
    id: 2,
    title: "Rượu Vang Đỏ Bordeaux",
    author: "Hanh",
    date: "2025-02-10",
    commentsCount: 45,
    description:
      `Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên.`.repeat(
        10,
      ),
    image: blog,
    tag: "Wine",
  },
  {
    id: 3,
    title: "Champagne Moët & Chandon",
    author: "Minh",
    date: "2025-02-08",
    commentsCount: 30,
    description:
      `Champagne Moët & Chandon có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn..`.repeat(6),
    image: thumb,
    tag: "Champagne",
  },
  {
    id: 4,
    title: "Vang Chile Santa Rita",
    author: "Linh",
    date: "2025-02-18",
    commentsCount: 22,
    description:
      `Rượu vang Chile Santa Rita mang hương vị trái cây đậm đà, có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: blog,
    tag: "Wine",
  },
  {
    id: 5,
    title: "Rượu Vang Pháp Château Margaux",
    author: "Nam",
    date: "2025-02-15",
    commentsCount: 50,
    description:
      `Château Margaux - một trong những dòng vang Pháp cao cấp, có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: thumb,
    tag: "Wine",
  },
  {
    id: 6,
    title: "Vang Ý Amarone Della Valpolicella",
    author: "Thu",
    date: "2025-02-11",
    commentsCount: 37,
    description:
      `Amarone Della Valpolicella nổi tiếng với quy trình sản xuất đặc biệt, đem lại hương vị đậm đà..`.repeat(
        6,
      ),
    image: blog,
    tag: "Vang",
  },
  {
    id: 7,
    title: "Champagne Dom Pérignon",
    author: "Trung",
    date: "2025-02-05",
    commentsCount: 80,
    description:
      `Dom Pérignon - dòng champagne thượng hạng với có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: thumb,
    tag: "Champagne",
  },
  {
    id: 8,
    title: "Rượu Vang Tây Ban Nha Rioja",
    author: "Huy",
    date: "2025-02-03",
    commentsCount: 25,
    description:
      `Vang Rioja với có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: blog,
    tag: "Vang",
  },
  {
    id: 9,
    title: "Vang New Zealand Sauvignon Blanc",
    author: "Lan",
    date: "2025-01-30",
    commentsCount: 15,
    description:
      `Sauvignon Blanc từ New Zealand có hương thơm tươi mát, rất được ưa chuộng..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Wine",
  },
  {
    id: 10,
    title: "Rượu Vang Úc Penfolds Grange",
    author: "Long",
    date: "2025-01-28",
    commentsCount: 42,
    description:
      `Penfolds Grange - biểu tượng của rượu vang Úc, sở hữu có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: blog,
    tag: "Wine",
  },
  {
    id: 11,
    title: "Champagne Veuve Clicquot",
    author: "Trang",
    date: "2025-01-25",
    commentsCount: 33,
    description:
      `Veuve Clicquot mang đến trải nghiệm sảng khoái với bọt khí mịn màng..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Champagne",
  },
  {
    id: 12,
    title: "Rượu Vang Argentina Malbec",
    author: "Quang",
    date: "2025-01-20",
    commentsCount: 20,
    description:
      `Vang Malbec nổi bật với có hương vị đặc trưng của sản phẩm lên men tự nhiên
    từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn...`.repeat(6),
    image: blog,
    tag: "Vang",
  },
  {
    id: 13,
    title: "Vang Đức Riesling",
    author: "My",
    date: "2025-01-15",
    commentsCount: 18,
    description:
      `Riesling từ Đức có hương thơm thanh thoát, vị chua cân bằng rất dễ uống..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Wine",
  },
  {
    id: 14,
    title: "Champagne Laurent-Perrier",
    author: "Hải",
    date: "2025-01-10",
    commentsCount: 28,
    description:
      `Laurent-Perrier là dòng champagne nhẹ nhàng, phù hợp với mọi bữa tiệc..`.repeat(
        6,
      ),
    image: blog,
    tag: "Champagne",
  },
  {
    id: 15,
    title: "Rượu Vang Nam Phi Pinotage",
    author: "Vy",
    date: "2025-01-05",
    commentsCount: 12,
    description:
      `Pinotage là dòng vang đặc trưng của Nam Phi với hương vị độc đáo..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Vang",
  },
  {
    id: 16,
    title: "Champagne Krug Grande Cuvée",
    author: "Dũng",
    date: "2025-01-02",
    commentsCount: 50,
    description:
      `Krug Grande Cuvée - dòng champagne đẳng cấp, sở hữu hương vị phức tạp..`.repeat(
        6,
      ),
    image: blog,
    tag: "Champagne",
  },
  {
    id: 17,
    title: "Rượu Vang Mỹ Napa Valley",
    author: "Thảo",
    date: "2024-12-28",
    commentsCount: 55,
    description:
      `Vang Napa Valley từ Mỹ có vị đậm đà, thích hợp với nhiều món ăn..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Vang",
  },
  {
    id: 18,
    title: "Vang Bồ Đào Nha Port Wine",
    author: "Phong",
    date: "2024-12-20",
    commentsCount: 22,
    description:
      `Port Wine là dòng vang ngọt nổi tiếng, có vị nồng nàn..`.repeat(6),
    image: blog,
    tag: "Wine",
  },
  {
    id: 19,
    title: "Champagne Taittinger",
    author: "Ngọc",
    date: "2024-12-15",
    commentsCount: 33,
    description:
      `Taittinger nổi bật với hương vị trái cây tươi mát, phù hợp với khai vị..`.repeat(
        6,
      ),
    image: thumb,
    tag: "Champagne",
  },
  {
    id: 20,
    title: "Rượu Vang Hy Lạp Assyrtiko",
    author: "Bảo",
    date: "2024-12-10",
    commentsCount: 18,
    description:
      `Assyrtiko là dòng vang trắng tươi mát, đặc trưng của Hy Lạp..`.repeat(6),
    image: blog,
    tag: "Wine",
  },
];

export const commentsData = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  author: "NgocThao",
  time: "Cách đây 4 giờ",
  content:
    "Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn.",
  replies: [
    { id: 1, author: "Duong", reply: "Đây là một phản hồi mẫu." },
    { id: 2, author: "Dat", reply: "Mình cũng thích loại này!" },
  ],
}));

export const tags = ["Wine", "Champagne", "Vang", "Độc đáo"];
