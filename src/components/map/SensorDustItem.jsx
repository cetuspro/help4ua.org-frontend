const SensorDustItem = ({ icon: Icon, name, value, unit }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-300 w-full">
      {Icon && (
        <div className="flex items-center justify-center my-1 text-gray-500">
          <Icon size={34} color="currentColor" />
        </div>
      )}
      <span>{name}</span>
      <span className="ml-auto text-lg font-bold text-gray-700">{value}</span>
      <span className="text-base text-gray-700">{unit}</span>
    </div>
  )
}

export default SensorDustItem
