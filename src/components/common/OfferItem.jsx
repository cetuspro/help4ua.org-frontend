const OfferItem = ({ label, value, ...props }) => {
  return (
    <div {...props} className={`py-2 flex gap-2 ${props.className}`}>
      <span className="">{label}</span>
      <span className="font-bold ">{value}</span>
    </div>
  )
}

export default OfferItem;