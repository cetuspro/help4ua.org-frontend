export const getStatusBadge = (statusType) => {
  switch (statusType) {
    case 20:
      return 'badge-success'
    case 30:
      return 'badge-warning'
    case 40:
      return 'badge-danger'
    default:
      return 'badge'
  }
}
