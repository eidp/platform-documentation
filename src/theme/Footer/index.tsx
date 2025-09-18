import React, { type ReactNode, useEffect } from 'react';
import Footer from '@theme-original/Footer';
import type FooterType from '@theme/Footer';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  useEffect(() => {
    let footerTitles = document.querySelectorAll('div.footer__title');

    // Add classes to 'Social' footer items so we can easily style them with CSS.
    footerTitles.forEach((footerTitle) => {
      if (footerTitle.textContent.trim() === 'Social') {
        footerTitle.classList.add('social-title');
        let listContainer = footerTitle.nextElementSibling;
        let listItems = listContainer.querySelectorAll('li');

        listItems.forEach((item) => {
          console.log('Processing item:', item);
          let className = item.textContent
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-');
          item.classList.add('social', className);
        });
      }
    });
  });
  return (
    <>
      <Footer {...props} />
    </>
  );
}
