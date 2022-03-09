const NoticeDetailsItem = ({
  icon,
  label,
  value,
  className = '',
  labelClassName = '',
  valueClassName = '',
}) => {
  return (
    <div className={`mb-2 flex items-start ${label ? 'gap-2' : ''} ${className}`}>
      <span className={`flex items-center ${labelClassName}`}>
        <span className="mr-2.5">{icon}</span>
        {label}
        {label ? ':' : ''}
      </span>
      <span className={`font-bold ${valueClassName}`}>{value}</span>
    </div>
  )
}

export default NoticeDetailsItem
