export class BaseURL {
  private static URL = 'http://localhost:8080';

  public static getURL(): string {
    return this.URL;
  }
}
