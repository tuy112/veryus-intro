export default function InstagramIcon() {
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