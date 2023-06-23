import React, { useState } from 'react'
import { useLocation, Link } from 'wouter'
import logo from '../../assets/logo.svg'
import discordIcon from '../../assets/links/discord.svg'
import twitterIcon from '../../assets/links/twitter.svg'
import mediumIcon from '../../assets/links/medium.svg'
import { HamburgerMenu } from '../common/HamburgerMenu'

enum SelectableMenu {
  V320,
  V4
}

function getSelectableMenu(path: string) {
  if (path.indexOf('v320') >= 0) {
    return SelectableMenu.V320
  } else if (path.indexOf('v4') >= 0) {
    return SelectableMenu.V4
  }
  return SelectableMenu.V320
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
                className={`flex justify-center items-center space-x-1 rounded-3xl px-4 py-1 ${
                  selected === SelectableMenu.V320
                    ? 'bg-primary text-white'
                    : 'text-subtext'
                }`}
              >
                <div className="w-1 h-1 rounded-full bg-red p-1" />
                <Link href="/v320">Version 3.2</Link>
              </li>
              <li
                className={`rounded-3xl px-4 py-1 ${
                  selected === SelectableMenu.V4
                    ? 'bg-primary text-white'
                    : 'text-subtext'
                }`}
              >
                <Link href="/v4" className="whitespace-nowrap">
                  Version 4(Coming Soon)
                </Link>
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
            <div className="px-1"></div>
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
              className={`rounded-3xl px-4 py-1 ${
                selected === SelectableMenu.V320
                  ? 'bg-primary text-white'
                  : 'text-subtext'
              }`}
            >
              <Link href="/v320">Version 3.2</Link>
            </li>
            <li
              className={`rounded-3xl px-4 py-1 ${
                selected === SelectableMenu.V4
                  ? 'bg-primary text-white'
                  : 'text-subtext'
              }`}
            >
              <Link href="/v4">Version 4(Coming Soon)</Link>
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
