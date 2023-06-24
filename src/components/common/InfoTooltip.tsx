import React, { ReactNode } from 'react'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Typography
} from '@material-tailwind/react'
import infoSvg from '../../assets/info.svg'

const InfoTooltip = ({
  children,
  placement
}: {
  children: ReactNode
  placement: string
}) => {
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
        <Typography
          variant="small"
          color="black"
          className="font-normal bg-white text-black"
        >
          {children}
        </Typography>
      </PopoverContent>
    </Popover>
  )
}

export default InfoTooltip
