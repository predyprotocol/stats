import React, { ReactNode } from 'react'
import {
  Popover,
  PopoverHandler,
  PopoverContent
} from '@material-tailwind/react'
import infoSvg from '../../assets/info.svg'

const InfoTooltip = ({ children }: { children: ReactNode }) => {
  const [openPopover, setOpenPopover] = React.useState(false)
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false)
  }
  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers}>
        <img className="ml-1 mb-2" src={infoSvg} alt="info" width={16} />
      </PopoverHandler>
      <PopoverContent {...triggers} className="w-80 bg-white rounded-xl shadow">
        <div className="font-normal bg-white text-black">{children}</div>
      </PopoverContent>
    </Popover>
  )
}

export default InfoTooltip
