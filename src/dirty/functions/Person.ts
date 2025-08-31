type Person = {
  name: string;
  age: number;
  email: string;
}

export class PersonBuilder {
  private data: Partial<Person> = {};

  batch(person: Partial<Person>) {
    this.data = {...this.data, ...person}
    return this;
  }

  name(name: string): PersonBuilder {
    this.data.name = name;
    return this;
  }

  age(age: number): PersonBuilder {
    this.data.age = age;
    return this;
  }

  email(email: string): PersonBuilder {
    this.data.email = email;
    return this;
  }

  build(): Readonly<Person> {
    return Object.freeze({
      name: this.data.name!,
      age: this.data.age!,
      email: this.data.email!
    });
  }
}