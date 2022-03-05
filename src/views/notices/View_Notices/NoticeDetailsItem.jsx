const NoticeDetailsItem = ({ label, labelClassName, value, valueClassName }) => {
  return (
    <div className={`mb-2 flex ${label ? 'gap-2' : ''}`}>
      <span className={labelClassName}>
        {label}
        {label ? ':' : ''}
      </span>
      <span className={`font-bold ${valueClassName}`}>{value}</span>
    </div>
  )
}

export default NoticeDetailsItem
