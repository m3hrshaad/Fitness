import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import type { SelectedPage } from '../../shared/types';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

   return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-red-500" : "text-red-900"}
        transition duration-500 hover:text-red-400
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}

    </AnchorLink>
   )
  }

export default Link