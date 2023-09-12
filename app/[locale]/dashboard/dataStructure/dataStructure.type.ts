export interface IDataStructure {
  id: string
  title: {
    [locale: string]: string
  }
  templatesCount: number
  lastModifiedAt: string
  icon: string
}
