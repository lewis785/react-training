import { Space } from '../model/Model'

export default class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = []
    result.push({
      location: 'Paris',
      name: 'Best Location',
      spaceId: '123',
    })
    result.push({
      location: 'Edinburgh',
      name: 'The besterest place',
      spaceId: '1337',
    })
    result.push({
      location: 'New York',
      name: 'The okist place',
      spaceId: '11111',
    })

    return result
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === '123') {
      return '5555'
    }
    return undefined
  }
}
