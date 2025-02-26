import thumb from "../assets/images/thumb.jpg";
import blog from "../assets/images/blog.jpg";
import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";
import product4 from "../assets/products/4.jpg";
import product5 from "../assets/products/5.jpg";
import product6 from "../assets/products/6.jpg";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.jpg";
import product9 from "../assets/products/9.jpg";
import product10 from "../assets/products/10.jpg";
import product11 from "../assets/products/11.jpg";
import product12 from "../assets/products/12.jpg";
import product13 from "../assets/products/13.jpg";
import product14 from "../assets/products/14.jpg";

const images = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
];

export const prod_tags = ["Sale", "Mới", "Hot"];

export const categories = [
  {
    name: "RƯỢU NGOẠI",
    subcategories: [
      { name: "Rượu Chivas", count: 26 },
      {
        name: "Hàng độc - Rượu độc đáo",
        count: 36,
        children: [{ name: "Johnnie Walker", count: 46 }],
      },
      { name: "Rượu Whisky", count: 24 },
      { name: "Rượu Remy Martin", count: 16 },
      { name: "Rượu Glenmorangie", count: 11 },
      { name: "Rượu Ballantine's", count: 7 },
      { name: "Rượu Cognac", count: 40 },
      { name: "Rượu Vodka", count: 9 },
      { name: "Rượu Macallan", count: 19 },
      { name: "Rượu Brandy", count: 27 },
      { name: "Rượu Hennessy", count: 20 },
      { name: "RượuGin - Tequila - Liqueur - Rượu mùi", count: 36 },
      { name: "Rượu Champagne", count: 12 },
      { name: "Rượu Single malt Scotch whisky", count: 47 },
      { name: "Rượu Spirits", count: 4 },
    ],
  },
  {
    name: "RƯỢU VANG",
    subcategories: [
      { name: "Rượu Vang Pháp", count: 44 },
      { name: "Rượu Vang Úc", count: 34 },
      { name: "Rượu Vang Mỹ", count: 16 },
      { name: "Rượu Vang ChiLê", count: 48 },
      { name: "Rượu Vang Philip", count: 1 },
      { name: "Rượu Vang Nam Phi", count: 20 },
      { name: "Rượu Vang Ý", count: 2 },
    ],
  },
];

const getRandomItem = (arr) =>
  arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null;

const getRandomPrice = () => {
  let price = Math.floor(Math.random() * 1000000) + 300000;
  let oldPrice = price + Math.floor(Math.random() * 200000) + 50000;
  return { price, oldPrice };
};

const createProduct = (
  id,
  name,
  category,
  subcategory,
  tag,
  image,
  price,
  oldPrice,
  description,
) => ({
  id,
  name,
  category,
  subcategory,
  tag,
  image,
  price,
  oldPrice,
  description,
});

export const products = [];
let productId = 1;
categories.forEach((category) => {
  category.subcategories.forEach((sub) => {
    const numProducts = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i < numProducts; i++) {
      const { price, oldPrice } = getRandomPrice();
      products.push(
        createProduct(
          productId++,
          `${sub.name} Special ${i + 1}`,
          category.name,
          sub.name,
          getRandomItem(prod_tags),
          getRandomItem(images) || thumb,
          price,
          oldPrice,
          `Rượu ${sub.name} Special ${i + 1} mang đến hương vị ngọt ngào, kết hợp chút cay nồng và hương gỗ sồi.`,
        ),
      );
    }
  });
});

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
    city: "Cần Thơ",
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

export const orders = [
  {
    id: 1,
    customer: `${users[0].last_name} ${users[0].first_name}`,
    orderCode: `${users[0].first_name.toUpperCase()}${users[0].last_name.toUpperCase()}-1`,
    warehouse: users[0].city,
    products: [
      { ...products[0], quantity: 2 },
      { ...products[1], quantity: 1 },
    ],
    status: "pending",
  },
  {
    id: 2,
    customer: `${users[1].last_name} ${users[1].first_name}`,
    orderCode: `${users[1].first_name.toUpperCase()}${users[1].last_name.toUpperCase()}-2`,
    warehouse: users[1].city,
    products: [
      { ...products[3], quantity: 1 },
      { ...products[5], quantity: 2 },
      { ...products[7], quantity: 1 },
    ],
    status: "paid",
  },
  {
    id: 3,
    customer: `${users[2].last_name} ${users[2].first_name}`,
    orderCode: `${users[2].first_name.toUpperCase()}${users[2].last_name.toUpperCase()}-3`,
    warehouse: users[2].city,
    products: [
      { ...products[2], quantity: 3 },
      { ...products[4], quantity: 2 },
    ],
    status: "done",
  },
  {
    id: 4,
    customer: `${users[3].last_name} ${users[3].first_name}`,
    orderCode: `${users[3].first_name.toUpperCase()}${users[3].last_name.toUpperCase()}-4`,
    warehouse: users[3].city,
    products: [
      { ...products[6], quantity: 1 },
      { ...products[8], quantity: 1 },
      { ...products[9], quantity: 2 },
    ],
    status: "delivering",
  },
  {
    id: 5,
    customer: `${users[4].last_name} ${users[4].first_name}`,
    orderCode: `${users[4].first_name.toUpperCase()}${users[4].last_name.toUpperCase()}-5`,
    warehouse: users[4].city,
    products: [
      { ...products[10], quantity: 2 },
      { ...products[11], quantity: 3 },
    ],
    status: "processing",
  },
  {
    id: 6,
    customer: `${users[5].last_name} ${users[5].first_name}`,
    orderCode: `${users[5].first_name.toUpperCase()}${users[5].last_name.toUpperCase()}-6`,
    warehouse: users[5].city,
    products: [
      { ...products[12], quantity: 1 },
      { ...products[13], quantity: 2 },
      { ...products[0], quantity: 1 },
    ],
    status: "cancelled",
  },
  {
    id: 7,
    customer: `${users[6].last_name} ${users[6].first_name}`,
    orderCode: `${users[6].first_name.toUpperCase()}${users[6].last_name.toUpperCase()}-7`,
    warehouse: users[6].city,
    products: [
      { ...products[1], quantity: 2 },
      { ...products[3], quantity: 3 },
    ],
    status: "pending",
  },
  {
    id: 8,
    customer: `${users[7].last_name} ${users[7].first_name}`,
    orderCode: `${users[7].first_name.toUpperCase()}${users[7].last_name.toUpperCase()}-8`,
    warehouse: users[7].city,
    products: [
      { ...products[5], quantity: 1 },
      { ...products[7], quantity: 2 },
      { ...products[9], quantity: 1 },
    ],
    status: "done",
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

export const addressesData = [
  {
    id: 1,
    name: "Giang",
    lastName: "Lê Anh",
    company: "Cổ phần công nghệ DKT",
    address: "Tòa nhà Hà Nội Group, 442 Đội Cấn, Ba Đình, Hà Nội",
    city: "Hà Nội",
    country: "Việt Nam",
    zip: "2300089",
    phone: "0974554928",
    isDefault: true,
  },
  {
    id: 2,
    name: "Trang",
    lastName: "Anh",
    company: "Cổ phần công nghệ DKT",
    address: "Tòa nhà Hà Nội Group, 442 Đội Cấn, Ba Đình, Hà Nội",
    city: "Hà Nội",
    country: "Việt Nam",
    zip: "2300089",
    phone: "0974554928",
    isDefault: false,
  },
];
