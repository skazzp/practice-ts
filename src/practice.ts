let age: number = 50;
let name1: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: void = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

let anything: any = -20;
anything = 'Text';
anything = {};

let some: unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') str = some;

let person: [string, number] = ['Max', 21];

function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

type Page1 = {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: { createAt: string; updateAt: string };
};

const page1: Page1 = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  },
};

const page2: Page1 = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
};
