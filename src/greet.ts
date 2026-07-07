export interface User {
  name: string;
  age: number;
}

export function greet(user: User): string {
  return `Hello, ${user.name}!`;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
export function getAge(user: any): number {
  return (user as any).age;
}
