import Tooltip from './Tooltip'
import Button from './Button'

const IconButton = ({ tooltip, icon: Icon, url, color, onClick, size = 20, ...rest }) => {
  return (
    <Tooltip {...rest} value={tooltip}>
      <Button color={color ?? 'primary'} to={url} onClick={onClick} className="px-2 py-2">
        {Icon && <Icon size={size} />}
      </Button>
    </Tooltip>
  )
}

export default IconButton
