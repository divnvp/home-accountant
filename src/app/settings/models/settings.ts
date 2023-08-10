export class Settings {
  darkTheme: boolean;
  name: string;
  surname: string;
  birthdayDate: string;
  email: string;
  phone: string;
  password: string;

  get isDarkTheme(): boolean {
    return this.darkTheme;
  }

  setDarkTheme(value: boolean) {
    this.darkTheme = value;
  }

  get fullName(): string {
    return [this.surname, this.name].join(' ');
  }

  constructor(public data: Partial<Settings>) {
    if (data) {
      // noinspection TypeScriptValidateTypes
      Object.assign(this, data);
    }
  }
}
