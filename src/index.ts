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

test();
