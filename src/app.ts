class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('name');

console.log(accounting);
