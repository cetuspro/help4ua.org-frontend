const Table = ({data, firstColumnStyles, secondColumnStyles, conditionColumn, className}) => {
  return (
    <table className={`text-left ${className}`}>
      <tbody>
        {data.map(row => (
          !!(!conditionColumn || (conditionColumn && row[conditionColumn] != null)) && <tr key={row}>
            {row[0] != null && <td className={`py-1 ${firstColumnStyles}`}>{row[0]}</td>}
            {row[1] != null && <td className={`py-1 pl-5 ${secondColumnStyles}`}>{row[1]}</td>}
            {row.length > 2 && row.slice(2).map(cell => (
              <td className={`py-1 pl-5`} key={cell}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
