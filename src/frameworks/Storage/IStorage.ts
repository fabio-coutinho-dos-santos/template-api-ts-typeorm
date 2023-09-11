export interface IStorage {
  storeFile(): Promise<any>;
  getFile(): Promise<any>;
}