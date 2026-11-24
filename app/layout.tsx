import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
      title: "버스킹팀 베리어스",
      description: "다양한 음악을 우리답게! 버스킹팀 베리어스 공식 페이지입니다.",
};

type RootLayoutProps = {
      children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
      return (
            <html lang="ko">
                  <body>
                        {children}
                  </body>
            </html>
      );
}