enum WorkFlag {
    None,
    Working,
    GoHome,
}

function test(): void {
    //#region string、number、boolean、enum、数组、元祖 类型测试
    const strName: string = 'ZZH';
    const age: number = 30;
    const inWorking: boolean = true;
    const workStatu: WorkFlag = WorkFlag.Working;

    const role: Array<string> = ['admin', 'user', 'guest'];
    const address: [string, number] = ['ShenZhen', 403];
    const weight: any[] = [73.4, '74.5kg'];

    console.log(strName, age, inWorking, workStatu, role, address, weight);
    //#endregion

    //#region any、undefined、null
    const oBox: any = document.getElementsByClassName('box')[0];
    oBox.style.backgroundColor = 'lightgreen';

    let num: number | undefined = undefined;
    num = 123;
    console.log(num);

    let obj: {} | null = null;
    obj = { name: 'zzh' };
    console.log(obj);
    //#endregion
}
//test();

//#region 函数
function run(): void {
    console.log('run 123');
}
//run();

const run1 = function (): string {
    return '123';
};
//console.log('run1', run1());

const run2 = function (): number {
    return 123;
};
//console.log('run2', run2());

function run3(name: string, thing: string): string {
    return `${name} 在 ${thing}`;
}
//console.log(run3('ZZH', '吃饭'));

const run4 = function (name: string, thing: string): string {
    return `${name} 在 ${thing}`;
};
//console.log(run4('CYL', '睡觉'));

const run5 = function (name: string, age?: number): string {
    if (age) {
        return `${name}今年${age}岁`;
    } else {
        return `${name}年龄保密`;
    }
};
//console.log(run5('Cat', 3));

const run6 = function (name: string = 'Mao', age: number = 10): string {
    return `${name} 今年 ${age}`;
};
//console.log(run6('Dog'));
//console.log(run6());
//console.log(run6('Haipi', 20));

const sumFunction = function (param1: number, param2: number, ...rest: Array<number>) {
    let sum = param1 + param2;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
};
//console.log('sum', sumFunction(1, 2, 3));

function testFunction(name: string, age: string): string;
function testFunction(name: string, age: number): string;
function testFunction(name: any, age: any): string {
    return `${name} ${age}`;
}
const result: string = testFunction('test', 2);
//console.log(result);

function testFun(name: string, age: string | number): string {
    return `${name} ${age}`;
}
//console.log(testFun('za', '1'));
//console.log(testFun('za', 2));

const fun = (name: string, age: number): string => {
    return `匿名方法 ${name} ${age}`;
};
//console.log(fun('Han', 18));

//#endregion

//#region 类
class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    work(): string {
        return `${this.name} is Working`;
    }
}
const p = new Person('Dodo');
//console.log(`name is: ${p.getName()}`);

class Web extends Person {
    static info: string = 'web info';
    static getInfo(): string {
        return `${Web.info} -- static`;
    }

    constructor(name: string) {
        super(name);
    }
    work(): string {
        return '啥也不是';
    }
}

const web = new Web('Haha');
//console.log(web.getName());
//console.log(web.work());
//console.log(Web.getInfo());

abstract class Animal {
    abstract getName(): string;
}

class Dog extends Animal {
    name: string = '';
    constructor(name: string) {
        super();
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
}
const dog = new Dog('xiao hua');
console.log(dog.getName());

//#endregion
