export function formatIdentity(identityNumber: string) {
  const formattedIdentity = identityNumber.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    '$1.$2.$3-$4',
  )
  return formattedIdentity
}
