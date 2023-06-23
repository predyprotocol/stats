import React, { ReactNode } from 'react'
import { Tooltip, Typography } from '@material-tailwind/react'
import infoSvg from '../../assets/info.svg'

const InfoTooltip = ({
  children,
  placement
}: {
  children: ReactNode
  placement: string
}) => {
  return (
    <Tooltip
      content={
        <div className="w-80 p-2 bg-white rounded-xl">
          <Typography
            variant="small"
            color="black"
            className="font-normal bg-white text-black"
          >
            {children}
          </Typography>
        </div>
      }
      placement={placement}
    >
      <img className="ml-1 mb-2" src={infoSvg} alt="info" width={16} />
    </Tooltip>
  )
}

export default InfoTooltip
