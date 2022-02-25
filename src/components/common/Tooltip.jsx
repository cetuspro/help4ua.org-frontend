import { FaQuestionCircle } from 'react-icons/fa'
import { Tooltip as Tippy } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

const Tooltip = ({ value, children, className = '', innerClassName = '', ...props }) => (
  <Tippy title={value} duration={250} animateFill className={className}>
    <div className={`flex ${innerClassName}`} {...props}>
      {children}
    </div>
  </Tippy>
)

export default Tooltip

export const FormTooltip = (props) => (
  <Tooltip {...props} innerComponent="span" className="ml-2">
    <FaQuestionCircle className="text-muted" size={'1.25rem'} />
  </Tooltip>
)
