import { IStorage } from "./IStorage";

export class CloudStorageService implements IStorage {
  storeFile(): Promise<any> {
    console.log('File stored in GCP');
    return Promise.resolve(true)
  }

  getFile(): Promise<any> {
    console.log('file found');
    return Promise.resolve(true)
  }
}