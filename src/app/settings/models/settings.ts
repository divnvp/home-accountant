export class Settings {
  darkTheme: boolean;

  get isDarkTheme(): boolean {
    return this.darkTheme;
  }

  setDarkTheme(value: boolean) {
    this.darkTheme = value;
  }

  constructor(public data: Partial<Settings>) {
    if (data) {
      // noinspection TypeScriptValidateTypes
      Object.assign(this, data);
    }
  }
}
