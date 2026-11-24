'use client';

import { useState } from 'react';

import SubscribeModal from './components/SubscribeModal';
import styles from './page.module.css';

type SocialLinkProps = {
      href: string;
      icon: React.ReactNode;
      title: string;
      description: string;
};

const LINKS = {
      recruitment: 'https://open.kakao.com/o/gf6bm0If',
      youtube: 'https://youtube.com/@_veryus?si=A_PMFYQGeNm5doqX',
      program: 'https://veryusduet.web.app',
      instagram: 'https://www.instagram.com/_veryus?igsh=a2Jlbjl4ZjJwOHNk&utm_source=qr',
      collaboration: 'https://veryusduet.web.app/collaboration'
};

function ShareIcon() {
      return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 16V4m0 0L7.5 8.5M12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5" />
            </svg>
      );
}

function ArrowIcon() {
      return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M7 7h10v10" />
            </svg>
      );
}

function YouTubeIcon() {
      return (
            <svg viewBox="0 0 48 36" aria-hidden="true">
                  <rect x="1" y="2" width="46" height="32" rx="9" fill="#ff3434" />
                  <path d="M20 10.5 32 18 20 25.5Z" fill="white" />
            </svg>
      );
}

function InstagramIcon() {
      return (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                  <defs>
                        <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
                              <stop offset="0" stopColor="#ffca45" />
                              <stop offset=".48" stopColor="#ef3274" />
                              <stop offset="1" stopColor="#7546d8" />
                        </linearGradient>
                  </defs>
                  <rect x="1" y="1" width="46" height="46" rx="13" fill="url(#instagram-gradient)" />
                  <rect x="10" y="10" width="28" height="28" rx="8" fill="none" stroke="white" strokeWidth="3" />
                  <circle cx="24" cy="24" r="7" fill="none" stroke="white" strokeWidth="3" />
                  <circle cx="33" cy="15" r="2" fill="white" />
            </svg>
      );
}

function ProgramIcon() {
      return (
            <svg viewBox="0 0 48 48" aria-hidden="true">
                  <rect x="2" y="2" width="44" height="44" rx="13" fill="#202027" />
                  <rect x="10" y="12" width="28" height="21" rx="3" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M10 18h28M16 37h16M24 33v4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="14" cy="15" r="1" fill="white" />
                  <circle cx="18" cy="15" r="1" fill="white" />
                  <path d="m21 23 4 4 5-6" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
      );
}

function VeryusLogo() {
      return (
            <svg viewBox="0 0 180 112" role="img" aria-label="Veryus">
                  <path d="M91 33C91 20 99 8 111 3" fill="none" stroke="#5a9d58" strokeWidth="3" strokeLinecap="round" />
                  <path d="M108 5C121 -1 137 3 148 13 135 19 119 18 108 5Z" fill="#5a9d58" />
                  <text x="90" y="67" textAnchor="middle" fill="#a63855" fontFamily="Georgia, serif" fontSize="34" fontStyle="italic" fontWeight="700">Veryus</text>
                  <path d="M44 78C54 101 83 105 105 92 117 85 127 83 137 91" fill="none" stroke="#a63855" strokeWidth="3" strokeLinecap="round" />
            </svg>
      );
}

function SocialLink({
      href,
      icon,
      title,
      description
}: SocialLinkProps) {
      const content = (
            <>
                  <span className={styles.linkIcon}>{icon}</span>

                  <span className={styles.linkCopy}>
                        <strong>{title}</strong>
                        <small>{description}</small>
                  </span>

                  <span className={styles.linkArrow}>
                        <ArrowIcon />
                  </span>
            </>
      );

      if (!href) {
            return (
                  <div className={`${styles.linkCard} ${styles.disabledCard}`} aria-disabled="true">
                        {content}
                  </div>
            );
      }

      return (
            <a
                  className={styles.linkCard}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
            >
                  {content}
            </a>
      );
}

export default function Home() {
      const [toast, setToast] = useState('');
      const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);

      async function handleShare() {
            const shareData = {
                  title: '버스킹팀 베리어스',
                  text: '다양한 음악을 우리답게!',
                  url: window.location.href
            };

            try {
                  if (navigator.share) {
                        await navigator.share(shareData);
                  } else if (navigator.clipboard?.writeText) {
                        await navigator.clipboard.writeText(shareData.url);
                        setToast('페이지 주소를 복사했습니다.');
                        window.setTimeout(() => setToast(''), 2200);
                  }
            } catch (error) {
                  if (error instanceof Error && error.name === 'AbortError') {
                        return;
                  }
                  console.error('공유 오류:', error);
                  setToast('공유 중 문제가 발생했습니다.');
                  window.setTimeout(() => setToast(''), 2200);
            }
      }

      return (
            <main className={styles.pageShell}>
                  <div className={styles.profilePage}>

                        {/* 메인 공연 이미지 */}
                        <section className={styles.hero}>
                              <div className={styles.heroTop}>
                                    <button
                                          className={styles.heroIconButton}
                                          type="button"
                                          onClick={handleShare}
                                          aria-label="페이지 공유"
                                    >
                                          <ShareIcon />
                                    </button>
                                    <button
                                          className={styles.heroIconButton}
                                          type="button"
                                          onClick={() => setIsSubscribeOpen(true)}
                                          aria-label="구독 알림"
                                    >
                                          <svg viewBox="0 0 24 24">
                                                <path
                                                      d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="1.7"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                />
                                          </svg>
                                    </button>

                                    <span className={styles.heroKicker}>
                                          LIVE MUSIC · BUSKING TEAM
                                    </span>
                              </div>

                              <div className={styles.heroHeading}>
                                    <span>Busking team</span>
                                    <h1>VeryUs</h1>
                                    <p>다양한 음악을 우리답게</p>
                              </div>

                              <div className={styles.heroBottom}>
                                    MAKE MUSIC, MAKE MOMENTS
                              </div>
                        </section>

                        <section className={styles.content}>

                              {/* 팀 소개 */}
                              <header className={styles.intro}>
                                    <span className={styles.eyebrow}>
                                          WELCOME TO VERYUS
                                    </span>

                                    <h2>음악으로 만나는 우리</h2>
                                    <p>다양한 음악을 우리답게!</p>

                                    {LINKS.collaboration ? (
                                          <a
                                                className={styles.contactButton}
                                                href={LINKS.collaboration}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                          >
                                                협업 제안하기
                                                <ArrowIcon />
                                          </a>
                                    ) : (
                                          <span className={styles.contactButton}>
                                                협업 제안
                                          </span>
                                    )}
                              </header>

                              {/* 팀원 모집 */}
                              <a
                                    className={styles.recruitCard}
                                    href={LINKS.recruitment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                              >
                                    <span className={styles.recruitLabel}>
                                          JOIN OUR TEAM
                                    </span>

                                    <div className={styles.brandLogo}>
                                          <VeryusLogo />
                                    </div>

                                    <strong>베리어스와 함께하기 🍀</strong>

                                    <span className={styles.recruitCaption}>
                                          새로운 팀원을 기다리고 있어요
                                    </span>

                                    <span className={styles.recruitCta}>
                                          팀원 상시 모집
                                          <ArrowIcon />
                                    </span>
                              </a>

                              {/* 공식 채널 */}
                              <section className={styles.linksSection}>
                                    <div className={styles.sectionHeading}>
                                          <span>OUR CHANNELS</span>
                                          <span className={styles.sectionLine} />
                                    </div>

                                    <div className={styles.linkList}>
                                          <SocialLink
                                                href={LINKS.youtube}
                                                icon={<YouTubeIcon />}
                                                title="베리어스 유튜브"
                                                description="공연 영상과 음악을 만나보세요"
                                          />

                                          <SocialLink
                                                href={LINKS.program}
                                                icon={<ProgramIcon />}
                                                title="베리어스 웹 프로그램"
                                                description="웹에서 바로 이용할 수 있습니다"
                                          />

                                          <SocialLink
                                                href={LINKS.instagram}
                                                icon={<InstagramIcon />}
                                                title="베리어스 인스타그램"
                                                description="일상과 공연 소식을 확인하세요"
                                          />
                                    </div>
                              </section>

                              {/* 하단 */}
                              <footer className={styles.footer}>
                                    <VeryusLogo />
                                    <span>VERYUS · BUSKING TEAM</span>
                                    <small>다양한 음악을 우리답게!</small>
                              </footer>
                        </section>

                        {toast && (
                              <div className={styles.toast} role="status">
                                    {toast}
                              </div>
                        )}
                  </div>

                  <SubscribeModal
                        isOpen={isSubscribeOpen}
                        onClose={() => setIsSubscribeOpen(false)}
                  />
            </main>
      );
}