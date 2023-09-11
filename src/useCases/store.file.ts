import { IStorage } from "../frameworks/Storage/IStorage";

export class UseCaseStoreFile {

  constructor(public readonly cloudStorage: IStorage) { }

  async sendFile() {
    this.cloudStorage.storeFile()
  }

}