window.TorF_questionData_c =  [
{
                id: 1,
                content: "一个include 命令可以指定多个被包含的文件。",
                answer: "错误",
                explanation: "在C语言中，一个#include命令只能包含一个文件。"
            },
            {
                id: 2,
                content: "int i=20; switch(i/10){case 2:printf(\"A\"); case 1:printf(\"B\");} 的输出结果为A。",
                answer: "错误",
                explanation: "输出结果为AB，因为case 2执行后会继续执行case 1（缺少break语句）。"
            },
            {
                id: 3,
                content: "若有 int i=10, j=0; 则执行完语句 if (j=0) i++; else i--; i的值为11。",
                answer: "错误",
                explanation: "j=0是赋值操作，条件判断为假，执行i--，所以i的值为9。"
            },
            {
                id: 4,
                content: "循环结构中的continue语句是使整个循环终止执行。",
                answer: "错误",
                explanation: "continue语句只结束本次循环，而不是终止整个循环。"
            },
            {
                id: 5,
                content: "若有说明 int c; 则 while(c=getchar()); 是正确的C语句。",
                answer: "正确",
                explanation: "这是一个合法的while循环，读取字符直到遇到EOF。"
            },
            {
                id: 6,
                content: "C语言中只能逐个引用数组元素而不能一次引用整个数组。",
                answer: "正确",
                explanation: "C语言不支持直接操作整个数组，只能通过索引访问单个元素。"
            },
            {
                id: 7,
                content: "在C程序中, 函数既可以嵌套定义, 也可以嵌套调用。",
                answer: "错误",
                explanation: "C语言不允许函数嵌套定义（在函数内部定义另一个函数），但允许嵌套调用。"
            },
            {
                id: 8,
                content: "通过return语句，函数可以带回一个或一个以上的返回值。",
                answer: "错误",
                explanation: "return语句只能返回一个值。要返回多个值，需要使用指针或结构体。"
            },
            {
                id: 9,
                content: "结构体类型只有一种。",
                answer: "错误",
                explanation: "结构体类型可以有多种，程序员可以根据需要定义不同的结构体类型。"
            },
            {
                id: 10,
                content: "int i, *p=&i; 是正确的C说明。",
                answer: "正确",
                explanation: "这是一个合法的指针声明和初始化，p指向变量i。"
            },
            {
                id: 11,
                content: "函数strlen(\"ASDFG\\n\")的值是7。",
                answer: "错误",
                explanation: "strlen计算字符串长度不包含结束符'\\0'，但包含换行符'\\n'，所以长度是6。"
            },
            {
                id: 12,
                content: "C语言的switch语句中case后可为常量或表达式或有确定值的变量及表达式。",
                answer: "错误",
                explanation: "case后只能为整型常量或常量表达式，不能是变量或非常量表达式。"
            },
            {
                id: 13,
                content: "while和do...while循环不论什么条件下它们的结果都是相同的。",
                answer: "错误",
                explanation: "当循环条件初始为假时，while循环一次都不执行，而do...while至少执行一次。"
            },
            {
                id: 14,
                content: "char c[]=\"Very Good\"; 是一个合法的为字符串数组赋值的语句。",
                answer: "正确",
                explanation: "这是合法的字符数组初始化为字符串的方式。"
            },
            {
                id: 15,
                content: "函数调用语句: func(rec1,rec2+rec3,(rec4,rec5)); 中, 含有的实参个数是5。",
                answer: "错误",
                explanation: "实参个数是3：rec1, rec2+rec3, 以及逗号表达式(rec4,rec5)。"
            },
            {
                id: 16,
                content: "共同体变量所占的内存长度等于最长的成员的长度。",
                answer: "正确",
                explanation: "联合体（共同体）的大小由最大成员的大小决定。"
            },
            {
                id: 17,
                content: "有如下说明: int a[10]={1,2,3,4,5,6,7,8,9,10}, *p=a; 则数值为9的表达式是 *(p+8)。",
                answer: "正确",
                explanation: "数组索引从0开始，a[8]等于9，*(p+8)等价于a[8]。"
            },
            {
                id: 18,
                content: "在Turbo C中，整型数据在内存中占2个字节。",
                answer: "正确",
                explanation: "在Turbo C这种16位编译器中，int类型通常占2个字节。"
            },
            {
                id: 19,
                content: "C程序中有调用关系的所有函数必须放在同一个源程序文件中。",
                answer: "错误",
                explanation: "可以通过函数声明在不同文件中使用函数。"
            },
            {
                id: 20,
                content: "关系运算符 <= 与 == 的优先级相同。",
                answer: "错误",
                explanation: "关系运算符中，<, <=, >, >= 优先级高于 == 和 !=。"
            },
            {
                id: 21,
                content: "如果想使一个数组中全部元素的值为0，可以写成int a[10]={0*10};",
                answer: "错误",
                explanation: "此写法仅初始化第一个元素为0，其余元素默认0，但写法不规范（通常用{0}初始化全部）。"
            },
            {
                id: 22,
                content: "C语言所有函数都是外部函数。",
                answer: "正确",
                explanation: "C语言中函数默认具有extern属性，属于外部函数。"
            },
            {
                id: 23,
                content: "表达式 (j=3, j++) 的值是4。",
                answer: "错误",
                explanation: "逗号表达式值为最后一个表达式的值，j++是先使用后自增，值为3。"
            },
            {
                id: 24,
                content: "int a[3][4]={{1},{5},{9}}; 它的作用是将数组各行第一列的元素赋初值，其余元素值为0。",
                answer: "正确",
                explanation: "每行第一个元素被赋值，其余元素自动初始化为0。"
            },
            {
                id: 25,
                content: "如果被调用函数的定义出现在主调函数之前,可以不必加以声明。",
                answer: "正确",
                explanation: "函数定义在前时，编译器已知道函数原型，无需额外声明。"
            },
            {
                id: 26,
                content: "语句scanf(\"%7.2f\",&a);是一个合法的scanf函数。",
                answer: "错误",
                explanation: "scanf中%f不允许指定小数位数（该格式仅适用于字符串截取）。"
            },
            {
                id: 27,
                content: "设有数组定义: char array [ ]=\"hello\"; 则数组 array所占的空间为5。",
                answer: "错误",
                explanation: "字符串包含结束符\\0，数组实际占用6个字节。"
            },
            {
                id: 28,
                content: "变量根据其作用域的范围可以分作局部变量和全局变量。",
                answer: "正确",
                explanation: "变量作用域分为局部（函数内）和全局（函数外）两种。"
            },
            {
                id: 29,
                content: "C语言的函数可以嵌套定义。",
                answer: "错误",
                explanation: "C语言严禁在函数内部定义另一个函数（不支持嵌套定义）。"
            },
            {
                id: 30,
                content: "如果函数值的类型和return语句中表达式的值不一致，则以函数类型为准。",
                answer: "正确",
                explanation: "返回值会被强制转换为函数定义时指定的类型。"
            },
            {
                id: 31,
                content: "在程序中定义了一个结构体类型后，可以多次用它来定义具有该类型的变量。",
                answer: "正确",
                explanation: "结构体类型定义后可作为自定义类型多次使用。"
            },
            {
                id: 32,
                content: "若有 int i=10,j=2;则执行完i*=j+8;后i的值为28。",
                answer: "错误",
                explanation: "j+8=10，i*=10等价于i=i*10，结果为100。"
            },
            {
                id: 33,
                content: "若 a=3,b=2,c=1 则关系表达式\"(a>b)==c\" 的值为\"真\"。",
                answer: "正确",
                explanation: "a>b为真（值为1），与c=1相等，表达式值为真。"
            },
            {
                id: 34,
                content: "逻辑表达式-5&&!8的值为1。",
                answer: "错误",
                explanation: "-5为真（非0），!8为假（0），逻辑与结果为假（0）。"
            },
            {
                id: 35,
                content: "#define 和printf 都不是C语句。",
                answer: "正确",
                explanation: "#define是预处理指令，printf是函数调用（需加分号才是语句）。"
            },
            {
                id: 36,
                content: "若有定义和语句：int a[3][3]={{3,5},{8,9},{12,35}},i,sum=0;for(i=0;i<3;i++) sum+=a[i][2-i];则sum=21。",
                answer: "正确",
                explanation: "计算a[0][2]=0、a[1][1]=9、a[2][0]=12，总和为21。"
            },
            {
                id: 37,
                content: "字符处理函数strcpy(str1,str2)的功能是把字符串1接到字符串2的后面。",
                answer: "错误",
                explanation: "strcpy的功能是将字符串str2复制到str1（覆盖原内容）。"
            },
            {
                id: 38,
                content: "a=(b=4)+(c=6) 是一个合法的赋值表达式。",
                answer: "正确",
                explanation: "赋值表达式合法，先执行b=4和c=6，再将和赋给a。"
            },
            {
                id: 39,
                content: "假设有int a[10],  *p;则p=&a[0]与p=a等价。",
                answer: "正确",
                explanation: "数组名a等价于&a[0]，两种赋值方式均使p指向数组首元素。"
            },
            {
                id: 40,
                content: "语句 printf(\"%f%%\",1.0/3);输出为 0.333333。",
                answer: "错误",
                explanation: "输出应为0.333333%（%%会被解析为输出%符号）。"
            },
            {
                id: 41,
                content: "整数 -32100可以赋值给int型和long int型变量。",
                answer: "正确",
                explanation: "在16位int范围内（-32768~32767），-32100合法，long类型通常范围更大。"
            },
            {
                id: 42,
                content: "若有定义和语句：int a;char c;float f;scanf(\"%d,%c,%f\",&a,&c,&f); 若通过键盘输入：10,A,12.5,则a=10,c='A',f=12.5。",
                answer: "正确",
                explanation: "输入格式与scanf格式控制符匹配，可正确赋值。"
            },
            {
                id: 43,
                content: "若有宏定义：#define S(a,b) t=a;a=b;b=t由于变量t没定义，所以此宏定义是错误的。",
                answer: "错误",
                explanation: "宏定义本身语法正确，但使用时因t未定义会导致编译错误（宏定义不检查变量声明）。"
            },
            {
                id: 44,
                content: "x*=y+8 等价于 x=x*(y+8)。",
                answer: "正确",
                explanation: "复合赋值运算符x*=expr等价于x=x*expr。"
            },
            {
                id: 45,
                content: "两个字符串中的字符个数相同时才能进行字符串大小的比较。",
                answer: "错误",
                explanation: "字符串比较按ASCII码逐个字符进行，与长度无关。"
            },
            {
                id: 46,
                content: "十进制数15的二进制数是1111。",
                answer: "正确",
                explanation: "15的二进制表示为2^3+2^2+2^1+2^0=8+4+2+1=15。"
            }
        ]