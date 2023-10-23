export function getHeadersJSONType(headers: any) {
  return {
    Authorization: headers.authorization,
    "Content-Type": 'application/json'
  }
}