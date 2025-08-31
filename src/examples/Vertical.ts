class Vertical {
  two(user: User | null, company: Company | null): void {
    let stuff: string;
    if (user == null) {
      if (company == null) {
        stuff = "default";
      }
      stuff = company.name + " employee";
    }
    if (user.salary < 100_000) {
      stuff = "staff";
    }
    stuff = "manager";
  }
}

class User {
  public salary: number = 666;
}

class Company {
  public name: string;
}