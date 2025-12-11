Core: React + TypeScript (Build tool: Vite)
Styling: Tailwind CSS (v3.4)
Icons: Lucide React
Data: JSON Structure (Dữ liệu tĩnh, không cần Backend server)
Node.js: (Khuyên dùng phiên bản 18 LTS trở lên). [Tải tại đây](https://nodejs.org/).

To run:
npm install
npm run dev

Lỗi giao diện thì:
npm install -D tailwindcss@3.4.17 postcss autoprefixer

Lỗi: npm error could not determine executable to run
Nguyên nhân: Do bộ nhớ đệm (cache) của npm trên máy bị lỗi.
Cách sửa: Chạy lệnh npm cache clean --force rồi thử lại.
