'use client'

import { useEffect } from 'react'

export function ClerkModalWatcher() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const modal = document.querySelector('[data-clerk-modal]');
      if (modal) {
        document.body.classList.add('clerk-modal-open');
      } else {
        document.body.classList.remove('clerk-modal-open');
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
