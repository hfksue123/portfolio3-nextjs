> npx create-next-app@latest
> npx shadcn@latest init
> npx shadcn@latest add input button scroll-area select sheet tabs textarea tooltip
> npm run dev
> npm install motion
> npm i react-icons
> npm i react-countup
> npm i swiper

<!-- deploy -->


1. Thêm font
- Import 1 hoặc nhiều font bất kỳ vào đầu trang layout.jsx
B1: `import { Inter } from 'next/font/google'` -> import vào 
B2: `const inter = Inter({subsets: ['latin'],variable: '--font-inter',})` -> định nghĩa font
B3: `<main className={`${inter.variable} font-sans`}><Component {...pageProps} /></main>` -> bỏ vào html ở cuối file với dạng ${...}
B4: thêm vào @theme với dạng `--font-[name]: var(--font-inter);` (với name là do mình tự đặt)
B5: gọi lại `font-[name]` trong bất kỳ className nào là oke.
2. Thêm Framer Motion khi load trang:
- Tạo 1 PageTransition.jsx ở components
- import vào layout.jsx và bọc vào `<PageTransition>{children}</PageTransition>`
- Hiệu ứng circle ở trong Photo.jsx