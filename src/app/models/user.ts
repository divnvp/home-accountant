export class User {
  id: string;
  phone: string;
  email: string;
  name: string;
  surname: string;
  patronymic?: string;
  birthDate: Date;
  emailValid: boolean;
  phoneValid: boolean;

  get fullName(): string {
    return [this.surname, this.name, this.patronymic].join(' ');
  }

  constructor(user: Partial<User>) {
    if (user) {
      // noinspection TypeScriptValidateTypes
      Object.assign(this, user);
    }
  }
}
