export type Person = {
  id: string
  coreFirstName: string
  coreLastName: string
  coreState: string
  addrStreetAndNo: string
  addrZipAndCity: string
  addrState: string
}

export const defaultPerson: Person = {
  id: "",
  coreFirstName: "",
  coreLastName: "",
  coreState: "",
  addrStreetAndNo: "",
  addrZipAndCity: "",
  addrState: "",
}