'use client';

import { useState } from 'react';

import SubscribeModal from './components/SubscribeModal';
import ShareIcon from './components/icons/ShareIcon';
import BellIcon from './components/icons/BellIcon';
import ArrowIcon from './components/icons/ArrowIcon';
import YouTubeIcon from './components/icons/YoutubeIcon';
import InstagramIcon from './components/icons/InstagramIcon';
import ProgramIcon from './components/icons/ProgramIcon';

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
                                    <div className={styles.heroActions}>
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
                                                <BellIcon />
                                          </button>
                                    </div>

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
                                          <img
                                                src="/images/veryus_logo.png"
                                                alt="베리어스 로고"
                                          />
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
                                    <div className={styles.brandLogo}>
                                          <img
                                                src="/images/veryus_logo.png"
                                                alt="베리어스 로고"
                                          />
                                    </div>
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