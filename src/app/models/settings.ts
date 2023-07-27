export class GlobalSettings {
  darkTheme: boolean;

  get isDarkTheme(): boolean {
    return this.darkTheme;
  }

  setDarkTheme(value: boolean) {
    this.darkTheme = value;
  }
}
