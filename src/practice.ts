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
/////////////////////////////////////////////////////////////
class Key {
  private signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * 100);
  }
  public getSignature(): number {
    console.log(this.signature);
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    console.log(this.key);
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is close');
    }

    this.tenants.push(person);
    console.log('Person inside');
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }

    return (this.door = true);
  }
}

const key = new Key();
const key2 = new Key();
const house = new MyHouse(key);
const person1 = new Person(key2);

house.openDoor(person1.getKey());

house.comeIn(person1);

////////////////////////////////

function getPromise(): Promise<(string | number)[]> {
  return new Promise(resolve => {
    resolve(['Text', 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, 'name' | 'color'>,
  bottom: Pick<AllType, 'position' | 'weight'>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

class Component<T> {
  constructor(public props: T) {}
}
interface Props {
  title: string;
}
class Page extends Component<Props> {
  pageInfo() {
    console.log(this.props.title);
  }
}
