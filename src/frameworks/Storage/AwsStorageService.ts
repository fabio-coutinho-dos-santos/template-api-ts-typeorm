import { IStorage } from "./IStorage";

export class AwsStorageService implements IStorage {
  storeFile(): Promise<any> {
    console.log('File stored in AWS');
    return Promise.resolve(true)
  }

  getFile(): Promise<any> {
    console.log('file found');
    return Promise.resolve(true)
  }
}