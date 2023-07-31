import React, { useState } from 'react'
import { useLocation, Link } from 'wouter'
import logo from '../../assets/logo.svg'
import discordIcon from '../../assets/links/discord.svg'
import twitterIcon from '../../assets/links/twitter.svg'
import mediumIcon from '../../assets/links/medium.svg'
import { HamburgerMenu } from '../common/HamburgerMenu'

enum SelectableMenu {
  V5
}

function getSelectableMenu(path: string) {
  if (path.indexOf('v5') >= 0) {
    return SelectableMenu.V5
  }
  return SelectableMenu.V5
}

const Header = () => {
  const [path] = useLocation()
  const selected = getSelectableMenu(path)
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <div className="fixed top-0 left-0 box-border z-50 w-full">
      <div className="flex items-center justify-between bg-black h-[64px] px-4 font-normal">
        <div className="flex items-center">
          <div className="hidden md:block">
            <img src={logo} alt="Logo"></img>
          </div>
        </div>
        <div>
          <div className="hidden md:block">
            <ul className="flex flex-row items-center space-x-6 text-sm">
              <li
                className={`flex justify-center items-center space-x-1 rounded-3xl px-4 py-1 ${selected === SelectableMenu.V5
                  ? 'bg-primary text-white'
                  : 'text-subtext'
                  }`}
              >
                <Link href="/v320">Version 5</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="hidden md:block">
            <ul className="flex flex-row justify-center items-center space-x-4">
              <li>
                <a
                  href="https://discord.gg/predy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width={21} src={discordIcon} alt={'Discord'} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/predyfinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width={21} src={twitterIcon} alt={'twitter'} />
                </a>
              </li>
              <li>
                <a
                  href="https://predyfinance.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img width={21} src={mediumIcon} alt={'Medium'} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <div className="pr-8 hidden md:block">
              <a href="https://v5app.predy.finance">App</a>
            </div>
          </div>
          <div>
            <div className="px-1"></div>
          </div>
        </div>

        <div className="block md:hidden">
          <HamburgerMenu
            onClick={() => {
              setOpenMobileMenu(!isOpenMobileMenu)
            }}
          />
        </div>
      </div>
      {isOpenMobileMenu ? (
        <div className="block md:hidden">
          <ul className="py-2 flex flex-col items-center space-y-6 text-base bg-black8">
            <li
              className={`rounded-3xl px-4 py-1 ${selected === SelectableMenu.V5
                ? 'bg-primary text-white'
                : 'text-subtext'
                }`}
            >
              <Link href="/v5">Version 5</Link>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Header
