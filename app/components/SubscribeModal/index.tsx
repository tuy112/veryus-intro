'use client';

import { useState } from 'react';
import styles from './style.module.css';

type SubscribeModalProps = {
      isOpen: boolean;
      onClose: () => void;
};

export default function SubscribeModal({
      isOpen,
      onClose
}: SubscribeModalProps) {
      const [email, setEmail] = useState('');
      const [agreed, setAgreed] = useState(false);

      if (!isOpen) {
            return null;
      }

      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const canSubmit = isValidEmail && agreed;

      function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault();

            if (!canSubmit) {
                  return;
            }

            // 실제 구독 API 연결 위치
            console.log('구독 신청:', email);
            alert('구독 API 연결이 필요합니다.');
      }

      return (
            <div
                  className={styles.overlay}
                  onMouseDown={(e) => {
                        if (e.target === e.currentTarget) {
                              onClose();
                        }
                  }}
            >
                  <section
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="subscribe-title"
                  >
                        <button
                              type="button"
                              className={styles.closeButton}
                              onClick={onClose}
                              aria-label="팝업 닫기"
                        >
                              <svg viewBox="0 0 24 24">
                                    <path d="m6 6 12 12M18 6 6 18" />
                              </svg>
                        </button>

                        <div className={styles.profileImage}>
                              <img
                                    src="/images/veryus-hero.jpg"
                                    alt="베리어스 공연 이미지"
                              />
                        </div>

                        <h2 id="subscribe-title">
                              veryus_ 구독하기
                        </h2>

                        <p className={styles.description}>
                              중요한 소식을 빠르게 만나보세요!
                        </p>

                        <form onSubmit={handleSubmit}>
                              <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="이메일을 적어주세요"
                                    aria-label="이메일 주소"
                                    required
                              />

                              <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={!canSubmit}
                              >
                                    구독
                              </button>

                              <label className={styles.agreement}>
                                    <input
                                          type="checkbox"
                                          checked={agreed}
                                          onChange={(e) => setAgreed(e.target.checked)}
                                    />

                                    <span>
                                          [필수] 개인정보 수집 및 이용과 광고성 정보 수신 동의
                                    </span>
                              </label>
                        </form>
                  </section>
            </div>
      );
}