window.experiment_questionData_c = [
    {
        id: 1,
        title: "求累加和",
        description: "编写函数fun求sum=d+dd+ddd+......+dd...d(n个d)，其中d为1-9的数字。",
        functionPrototype: "long int fun(int d, int n);",
        initialCode: "long int fun(int d, int n) {\n    long int s = 0, t = 0;\n    int i;\n    for (i = 1; i <= n; i++) {\n        t = t * 10 + d;\n        s = s + t;\n    }\n    return s;\n}",
        testCases: [
            { input: [3, 5], expected: 37035 },
            { input: [1, 3], expected: 123 },
            { input: [5, 4], expected: 6170 }
        ]
    },
    {
        id: 2,
        title: "素数判断",
        description: "编写函数判断一个数是否为素数，如果是返回1，否则返回0。",
        functionPrototype: "int isPrime(int num);",
        initialCode: "int isPrime(int num) {\n    if (num <= 1) return 0;\n    for (int i = 2; i * i <= num; i++) {\n        if (num % i == 0) return 0;\n    }\n    return 1;\n}",
        testCases: [
            { input: [7], expected: 1 },
            { input: [12], expected: 0 },
            { input: [23], expected: 1 }
        ]
    },
    {
        id: 3,
        title: "斐波那契数列",
        description: "编写函数计算斐波那契数列的第n项（n从1开始）。",
        functionPrototype: "int fibonacci(int n);",
        initialCode: "int fibonacci(int n) {\n    if (n <= 2) return 1;\n    int a = 1, b = 1, c;\n    for (int i = 3; i <= n; i++) {\n        c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}",
        testCases: [
            { input: [1], expected: 1 },
            { input: [5], expected: 5 },
            { input: [10], expected: 55 }
        ]
    }
];