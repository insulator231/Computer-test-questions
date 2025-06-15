window.choice_questionData_c  =[
            {
            "id": 1,
            "content": "已定义 ch 为字符型变量，以下赋值语句中错误的是（）。",
            "options": [
                {"text": "A、ch='\\xaa';", "value": "A"},
                {"text": "B、ch=NULL;", "value": "B"},
                {"text": "C、ch='\\\';", "value": "C"}, 
                {"text": "D、ch=62+3;", "value": "D"}
            ],
            "answer": "C",
            "explanation": "单引号内的反斜杠需要转义，正确写法应为 ch='\\\';"
        },
        {
            "id": 2,
            "content": "若变量已正确说明为 float 类型，要通过以下赋值语句给 a 赋予 10、b 赋予 22、c 赋予 33，以下不正确的输入形式是 scanf(\"%f %f %f\", &a, &b, &c);",
            "options": [
                {"text": "A、10.0,22.0,33.0", "value": "A"},
                {"text": "B、10.0\\n22.0 33.0", "value": "B"},
                {"text": "C、10\\n22\\n33", "value": "C"},
                {"text": "D、10\\n22\\n33", "value": "D"}
            ],
            "answer": "A",
            "explanation": "scanf 格式控制符中只有空格分隔，输入时不能用逗号分隔数值"
        },
        {
    "id": 3,
    "content": "为了避免在嵌套的条件语句if-else中产生二义性,C语言规定:else总与(  )配对",
    "options": [
        {"text": "A、同一行上的if", "value": "A"},
        {"text": "B、其之后最近的if", "value": "B"},
        {"text": "C、其之前最近的未配对的if", "value": "C"},
        {"text": "D、缩排位置相同的if", "value": "D"}
    ],
    "answer": "C",
    "explanation": "C语言规定else总是与之前最近的未配对的if配对，与缩进无关"
},
{
    "id": 4,
    "content": "下面程序的运行结果是\n#include <stdio.h>\nmain（）\n{ \n  int y=10;\ndo{y--;}while（--y）;\nprintf（\"%d＼n\",y--）; \n}",
    "options": [
        {"text": "A、0", "value": "A"},
        {"text": "B、1", "value": "B"},
        {"text": "C、8", "value": "C"},
        {"text": "D、-1", "value": "D"}
    ],
    "answer": "A",
    "explanation": "第一次循环：y=10→y--=9，--y=8（非零，继续循环）；第二次循环：y=8→y--=7，--y=6；直到y=1时，y--=0，--y=-1（零，退出循环）。最后输出y--=0"
},
{
    "id": 5,
    "content": "执行语句 for(i=1;i++<4;); 后变量 i 的值是（）。",
    "options": [
        {"text": "A、不定", "value": "A"},
        {"text": "B、3", "value": "B"},
        {"text": "C、4", "value": "C"},
        {"text": "D、5", "value": "D"}
    ],
    "answer": "D",
    "explanation": "循环条件i++<4的执行过程：i=1→1<4成立，i自增为2；i=2→2<4成立，i自增为3；i=3→3<4成立，i自增为4；i=4→4<4不成立，i自增为5，循环结束"
},
{
    "id": 6,
    "content": "若有说明: int a[3][4]={0};则下面正确的叙述是（）。",
    "options": [
        {"text": "A、数组a中每个元素均可得到初值0", "value": "A"},
        {"text": "B、只有元素a[0][0]可得到初值0", "value": "B"},
        {"text": "C、此说明语句不正确", "value": "C"},
        {"text": "D、数组a中各元素都可得到初值,但其值不一定为0", "value": "D"}
    ],
    "answer": "A",
    "explanation": "二维数组初始化时，若初始值个数少于元素总数，剩余元素自动补0。int a[3][4]={0}会将所有元素初始化为0"
},
{
    "id": 7,
    "content": "C语言中，函数值类型的定义可以缺省，此时函数值的隐含类型是（）。",
    "options": [
        {"text": "A、void", "value": "A"},
        {"text": "B、double", "value": "B"},
        {"text": "C、int", "value": "C"},
        {"text": "D、float", "value": "D"}
    ],
    "answer": "C",
    "explanation": "C语言中，若函数未显式声明返回类型，默认返回int类型（C89标准）"
},
{
    "id": 8,
    "content": "以下叙述中正确的是 （）。",
    "options": [
        {"text": "A、C程序中注释部分可以出现在程序中任意合适的地方", "value": "A"},
        {"text": "B、分号是C语句之间的分隔符,不是语句的一部分", "value": "B"},
        {"text": "C、花括号“{“和”}”只能作为函数体的定界符", "value": "C"},
        {"text": "D、构成C程序的基本单位是函数,所有函数名都可以由用户命名", "value": "D"}
    ],
    "answer": "A",
    "explanation": "注释可以出现在代码中的任何位置，用于提高可读性；分号是语句的必要组成部分；花括号可用于复合语句；main函数名不可由用户定义"
},
{
    "id": 9,
    "content": "若有定义：int  x, *pb;，则以下正确的赋值语句是",
    "options": [
        {"text": "A、*pb = *x", "value": "A"},
        {"text": "B、pb = &x", "value": "B"},
        {"text": "C、*pb = &x", "value": "C"},
        {"text": "D、pb = x", "value": "D"}
    ],
    "answer": "B",
    "explanation": "pb是指向int的指针，&x获取x的地址，赋值给pb合法；A中x不是指针，*x非法；C中*pb是int类型，不能存储地址；D中x是int，不能直接赋值给指针"
},
{
    "id": 10,
    "content": "当定义一个结构体变量时，系统分配给它的内存是（）。",
    "options": [
        {"text": "A、结构中最后一个成员所需内存量", "value": "A"},
        {"text": "B、结构中第一个成员所需内存量", "value": "B"},
        {"text": "C、成员中占内存量最大者所需的容量", "value": "C"},
        {"text": "D、各成员所需内存量的总和", "value": "D"}
    ],
    "answer": "D",
    "explanation": "结构体变量的内存大小为所有成员内存之和（忽略内存对齐时），与成员顺序和大小无关"
},
{
    "id": 11,
    "content": "以下数据中，不正确的数值或字符常量是（）。",
    "options": [
        {"text": "A、10", "value": "A"},
        {"text": "B、0xff00", "value": "B"},
        {"text": "C、8.9e1.2", "value": "C"},
        {"text": "D、82.5", "value": "D"}
    ],
    "answer": "C",
    "explanation": "指数形式的实数中，e后面必须跟整数，8.9e1.2不合法"
},
{
    "id": 12,
    "content": "执行下列程序后，其输出结果是（）。\nmain()\n{int  a=9;\n a+=a-=a+a;\n printf(\"%d\\n\",a);\n}",
    "options": [
        {"text": "A、18", "value": "A"},
        {"text": "B、-18", "value": "B"},
        {"text": "C、-9", "value": "C"},
        {"text": "D、9", "value": "D"}
    ],
    "answer": "B",
    "explanation": "右结合赋值运算：先计算a-=a+a → a=9-(9+9)=-9；再计算a+=-9 → a=-9+(-9)=-18"
},
{
    "id": 13,
    "content": "int a=1,b=2,c=3; if(a>c)b=a;a=c;c=b;则c的值为（）。",
    "options": [
        {"text": "A、3", "value": "A"},
        {"text": "B、2", "value": "B"},
        {"text": "C、不一定", "value": "C"},
        {"text": "D、1", "value": "D"}
    ],
    "answer": "B",
    "explanation": "条件a>c（1>3）为假，跳过b=a; 执行a=c=3，c=b=2，最终c=2"
},
{
    "id": 14,
    "content": "C语言中 while 和 do-while 循环的主要区别是（）。",
    "options": [
        {"text": "A、while的循环控制条件比 do-while的循环控制条件更严格", "value": "A"},
        {"text": "B、do-while 的循环体至少无条件执行一次", "value": "B"},
        {"text": "C、do-while 的循环体不能是复合语句", "value": "C"},
        {"text": "D、do-while 允许从外部转到循环体内", "value": "D"}
    ],
    "answer": "B",
    "explanation": "while循环先判断条件再执行循环体，可能一次不执行；do-while先执行循环体再判断条件，至少执行一次"
},
{
    "id": 15,
    "content": "下面程序的功能是把316表示为两个加数的和，使两个加数分别能被13和11整除，请选择填空。\n#include <stdio.h>\nmain（）\n{\nint i=0,j,k;\ndo{i++;k=316-13*i;}while（______）;\nj=k/11;\nprintf（\"316=13*%d+11*%d\",i,j）;\n}",
    "options": [
        {"text": "A、k%11==0", "value": "A"},
        {"text": "B、k/11", "value": "B"},
        {"text": "C、k%11", "value": "C"},
        {"text": "D、k/11==0", "value": "D"}
    ],
    "answer": "C",
    "explanation": "循环条件应为k不能被11整除时继续循环。k%11不为0时，条件成立（非零），继续寻找；k%11为0时，条件不成立，退出循环"
},
{
    "id": 16,
    "content": "在C语言中，引用数组元素时，其数组下标的数据类型允许是（）。",
    "options": [
        {"text": "A、任何类型的表达式", "value": "A"},
        {"text": "B、整型常量", "value": "B"},
        {"text": "C、整型表达式", "value": "C"},
        {"text": "D、整型常量或整型表达式", "value": "D"}
    ],
    "answer": "D",
    "explanation": "数组下标必须是整型表达式（包括整型常量、变量、运算式），不能是浮点型或其他类型"
},
{
    "id": 17,
    "content": "关于建立函数的目的，以下正确的说法是（）。",
    "options": [
        {"text": "A、减少程序文件所占内存", "value": "A"},
        {"text": "B、提高程序的执行效率", "value": "B"},
        {"text": "C、提高程序的可读性", "value": "C"},
        {"text": "D、减少程序的篇幅", "value": "D"}
    ],
    "answer": "C",
    "explanation": "函数的主要作用是模块化编程，将复杂逻辑拆分为独立功能，提高代码可读性和可维护性"
},
{
    "id": 18,
    "content": "在C语言中，能代表逻辑值“真”的是（）。",
    "options": [
        {"text": "A、大于0的数", "value": "A"},
        {"text": "B、True", "value": "B"},
        {"text": "C、非0的数", "value": "C"},
        {"text": "D、非0整数", "value": "D"}
    ],
    "answer": "C",
    "explanation": "C语言中，任何非零值都表示逻辑真，包括正数、负数、浮点型等；True是C++关键字，C语言中不适用"
},
        {
            "id": 19,
            "content": "变量 p 为指针变量，若 p=&a，下列说法不正确的是（）。",
            "options": [
                { "text": "A、*(p++)==a++", "value": "A" },
                { "text": "B、&*p==&a", "value": "B" },
                { "text": "C、(*p)++==a++", "value": "C" },
                { "text": "D、*&a==a", "value": "D" }
            ],
            "answer": "A",
            "explanation": "p++ 先返回 p 地址再自增，*(p++) 等价于 *a，然后 p 指向下一地址；a++ 先返回 a 值再自增。两者效果不同，表达式值相等但 p 和 a 的结果不同 "
        },
        {
            "id": 20,
            "content": "对结构体类型的变量的成员的访问，无论数据类型如何都可使用的运算符是（）。",
            "options": [
                { "text": "A、.", "value": "A" },
                { "text": "B、->", "value": "B" },
                { "text": "C、*", "value": "C" },
                { "text": "D、&", "value": "D" }
            ],
            "answer": "A",
            "explanation": "'.' 运算符用于结构体变量访问成员，'->' 用于指针访问成员；* 和 & 是解引用和取地址符，不直接用于成员访问 "
        },
        {
            "id": 21,
            "content": "求平方根函数的函数名为（）。",
            "options": [
                { "text": "A、sqrt", "value": "A" },
                { "text": "B、cos", "value": "B" },
                { "text": "C、pow", "value": "C" },
                { "text": "D、abs", "value": "D" }
            ],
            "answer": "A",
            "explanation": "sqrt 是平方根函数，cos 是余弦函数，pow 是幂函数，abs 是绝对值函数"
        },
        {
            "id": 22,
            "content": "若变量已正确说明，要求用以下语句给 c1 赋予字符 %、给 c2 赋予字符 #、给 a 赋予 2.0、给 b 赋予 4.0，则正确的输入形式是 scanf(\"%f%c%f%c\", &a, &c1, &b, &c2);",
            "options": [
                { "text": "A、2.0%4.0#", "value": "A" },
                { "text": "B、2% 4#", "value": "B" },
                { "text": "C、2.0 % 4.0 #", "value": "C" },
                { "text": "D、2 % 4 #", "value": "D" }
            ],
            "answer": "A",
            "explanation": "scanf 格式控制符 %f%c%f%c 要求输入时数值和字符连续，中间不能有空格。2.0 后直接跟 %，4.0 后直接跟 #，符合格式"
        },
        {
            "id": 23,
            "content": "运行以下程序后，输出的结果是 main (){ int k = -3; if (k <= 0) printf(\"****\\n\"); else printf(\"&&&&\\n\");}",
            "options": [
                { "text": "A、****", "value": "A" },
                { "text": "B、有语法错误不能通过编译", "value": "B" },
                { "text": "C、&&&&", "value": "C" },
                { "text": "D、****&&&&", "value": "D" }
            ],
            "answer": "A",
            "explanation": "k=-3 满足 k<=0 条件，执行 printf(\"****\\n\")，输出 ****"
        },
        {
            "id": 24,
            "content": "以下程序的运行结果是（）。main (){ int i=1,sum=0; while (i<10) sum=sum+1;i++; printf(\"i=%d,sum=%d\",i,sum);}",
            "options": [
                { "text": "A、i=10,sum=9", "value": "A" },
                { "text": "B、运行出现错误", "value": "B" },
                { "text": "C、i=2,sum=1", "value": "C" },
                { "text": "D、i=9,sum=9", "value": "D" }
            ],
            "answer": "B",
            "explanation": "while 循环体缺少花括号，仅 sum=sum+1 属于循环体，i++ 是循环外语句。循环条件 i<10 时，sum 不断自增（死循环），程序无法正常结束，运行错误 "
        },
        {
            "id": 25,
            "content": "以下程序的执行结果是 main (){ int x = 0, s = 0; while ( !x != 0 ) s += ++x; printf(\"%d \",s ); }",
            "options": [
                { "text": "A、无限循环", "value": "A" },
                { "text": "B、0", "value": "B" },
                { "text": "C、1", "value": "C" },
                { "text": "D、语法错误", "value": "D" }
            ],
            "answer": "C",
            "explanation": "!x != 0 等价于 x!=0。初始 x=0，!x=1，1!=0 为真，进入循环。++x 先自增到 1，s=0+1=1。此时 x=1，!x=0，0!=0 为假，退出循环。输出 s=1"
        },
        {
            "id": 26,
            "content": "对两个数组 a 和 b 进行如下初始化：char a [] = \"ABCDEF\";char b [] = {'A','B','C','D','E','F'}; 则以下叙述正确的是",
            "options": [
                { "text": "A、a 与 b 中都存放字符串", "value": "A" },
                { "text": "B、a 数组比 b 数组长度长", "value": "B" },
                { "text": "C、a 与 b 长度相同", "value": "C" },
                { "text": "D、a 与 b 完全相同", "value": "D" }
            ],
            "answer": "B",
            "explanation": "a 数组初始化字符串，末尾自动添加 '\\0'，长度为 7；b 数组显式初始化 6 个字符，长度为 6。因此 a 比 b 长 1"
        },
        {
            "id": 27,
            "content": "C 语言关于实参和形参说法正确的是",
            "options": [
                { "text": "A、形参是虚拟的，不占用存储单元", "value": "A" },
                { "text": "B、实参和与之对应的形参占用同一存储单元", "value": "B" },
                { "text": "C、实参和与之对应的形参各占用独立的存储单元", "value": "C" },
                { "text": "D、只有当实参与形参同名时，才共占用同一存储单元", "value": "D" }
            ],
            "answer": "C",
            "explanation": "C 语言函数参数传递为值传递，实参和形参各自拥有独立内存单元，形参是实参的副本"
        },
        {
            "id": 28,
            "content": "C 语言的注释定界符是（）。",
            "options": [
                { "text": "A、\\* *\\", "value": "A" },
                { "text": "B、{ }", "value": "B" },
                { "text": "C、[ ]", "value": "C" },
                { "text": "D、/* */", "value": "D" }
            ],
            "answer": "D",
            "explanation": "C 语言注释以 /* 开头，*/ 结尾，{} 用于复合语句，[] 用于数组下标"
        },
        {
            "id": 29,
            "content": "若有说明:int *p1,*p2,m=5,n; 以下均是正确赋值语句的选项是（）。",
            "options": [
                { "text": "A、p1=&m;*p2=*p1;", "value": "A" },
                { "text": "B、p1=&m;p2=p1;", "value": "B" },
                { "text": "C、p1=&m;p2=&p1", "value": "C" },
                { "text": "D、p1=&m;p2=&n;p1=p2;", "value": "D" }
            ],
            "answer": "B",
            "explanation": "A 中 p2 未初始化指向合法地址，解引用 *p2 是未定义行为；B 中 p2=p1 使 p2 指向 m，正确；C 中 p2=&p1 是指向指针的指针，类型不匹配；D 中 p2 访问未初始化的 n，可能是未定义行为"
        },
        {
            "id": 30,
            "content": "当说明一个结构体变量时系统分配给它的内存是（）。",
            "options": [
                { "text": "A、成员中占内存量最大者所需的容量", "value": "A" },
                { "text": "B、结构中最后一个成员所需内存量", "value": "B" },
                { "text": "C、结构中第一个成员所需内存量", "value": "C" },
                { "text": "D、各成员所需内存量的总和", "value": "D" }
            ],
            "answer": "D",
            "explanation": "同第 10 题，结构体变量内存为成员总和（忽略对齐时），选项 D 正确"
        },
        {
            "id": 31,
            "content": "设 a、b、c、d、m、n 均为 int 型变量，且 a=5、b=6、c=7、d=8、m=2、n=2，则逻辑表达式 (m=a>b)&&(n=c>d) 运算后，n 的值为______。",
            "options": [
                { "text": "A、3", "value": "A" },
                { "text": "B、0", "value": "B" },
                { "text": "C、1", "value": "C" },
                { "text": "D、2", "value": "D" }
            ],
            "answer": "D",
            "explanation": "逻辑与 && 具有短路特性。a>b=5>6 为假，m=0，此时整个表达式已确定为假，右侧 (n=c>d) 不执行，n 保持原值 2"
        },
        {
            "id": 32,
            "content": "若变量已正确说明为 int 类型，要给 a、b、c 输入数据，以下正确的输入语句是",
            "options": [
                { "text": "A、scanf(\"%d%d%d\", &a,&b,&c);", "value": "A" },
                { "text": "B、scanf(\"%d%d%d\",a,b,c);", "value": "B" },
                { "text": "C、read (a,b,c)", "value": "C" },
                { "text": "D、scanf(\"%D%D%D\",&a,&b,&C);", "value": "D" }
            ],
            "answer": "A",
            "explanation": "scanf 需传入变量地址，&a 正确；B 中未取地址；C 中 read 非 C 标准函数；D 中格式符 %D 错误，变量名 C 大小写错误"
        },
        {
            "id": 33,
            "content": "下列运算符中优先级别最高的是",
            "options": [
                { "text": "A、!", "value": "A" },
                { "text": "B、%", "value": "B" },
                { "text": "C、-=", "value": "C" },
                { "text": "D、&&", "value": "D" }
            ],
            "answer": "A",
            "explanation": "运算符优先级：!（逻辑非）属于单目运算符，优先级高于 %（算术运算符）、&&（逻辑与）、-=（赋值运算符）"
        },
        {
            "id": 34,
            "content": "t 为 int 类型，进人下面的循环之前，t 的值为 0while ( t=1 ){ ……} 则以下叙述中正确的是______。",
            "options": [
                { "text": "A、以上说法都不对", "value": "A" },
                { "text": "B、循环控制表达式的值为 1", "value": "B" },
                { "text": "C、循环控制表达式的值为 0", "value": "C" },
                { "text": "D、循环控制表达式不合法", "value": "D" }
            ],
            "answer": "B",
            "explanation": "循环条件 t=1 是赋值表达式，值为 1（真），因此循环控制表达式值为 1，循环将无限执行（死循环）"
        },
        {
            "id": 35,
            "content": "有以下程序段 int n=0,p;do { scanf(\"%d\",&p); n++;} while (p!=12345&&n<3); 此处 do-while 循环的结束条件是______。",
            "options": [
                { "text": "A、p 的值等于 12345 并且 n 的值大于等于 3", "value": "A" },
                { "text": "B、p 的值不等于 12345 并且 n 的值小于 3", "value": "B" },
                { "text": "C、p 的值不等于 12345 或者 n 的值小于 3", "value": "C" },
                { "text": "D、p 的值等于 12345 或者 n 的值大于等于 3", "value": "D" }
            ],
            "answer": "D",
            "explanation": "循环条件为 p!=12345&&n<3，当条件为假时结束循环。条件为假的情况是 p==12345 || n>=3，即结束条件为 D 选项"
        },
        {
            "id": 36,
            "content": "设有数组定义: char array []=\"China\"; 则数组 array 所占的空间为（）。",
            "options": [
                { "text": "A、5 个字节", "value": "A" },
                { "text": "B、7 个字节", "value": "B" },
                { "text": "C、4 个字节", "value": "C" },
                { "text": "D、6 个字节", "value": "D" }
            ],
            "answer": "D",
            "explanation": "字符串 \"China\" 包含 5 个字符，末尾自动添加 '\\0'，共 6 个字节，因此数组占 6 字节"
        },
        {
            "id": 37,
            "content": "在调用函数时，如果实参是简单变量，它与对应形参之间的数据传递方式是（）。",
            "options": [
                { "text": "A、传递方式由用户指定", "value": "A" },
                { "text": "B、地址传递", "value": "B" },
                { "text": "C、由实参传给形参，再由形参传回实参", "value": "C" },
                { "text": "D、单向值传递", "value": "D" }
            ],
            "answer": "D",
            "explanation": "C 语言中简单变量作为实参时，采用值传递，形参接收实参的副本，单向传递，不能传回实参"
        },
        {
            "id": 38,
            "content": "结构化程序由三种基本结构组成，三种基本结构组成的算法______。",
            "options": [
                { "text": "A、可以完成任何复杂的任务", "value": "A" },
                { "text": "B、只能完成一些简单的任务", "value": "B" },
                { "text": "C、只能完成符合结构化的任务", "value": "C" },
                { "text": "D、只能完成部分复杂的任务", "value": "D" }
            ],
            "answer": "A",
            "explanation": "结构化程序设计的三种基本结构（顺序、选择、循环）可以组合实现任何复杂算法，理论上能解决任何可计算问题"
        },
        {
            "id": 39,
            "content": " 若有定义 int a [10],*p=a;, 则 p+5 表示 ",
            "options": [
                { "text": "A、元素 a [5] 的地址", "value": "A" },
                { "text": "B、元素 a [6] 的地址", "value": "B" },
                { "text": "C、元素 a [6] 的值", "value": "C" },
                { "text": "D、元素 a [5] 的值", "value": "D" }
            ],
            "answer": "A",
            "explanation": "指针 p 指向 a [0]，p+5 表示向后移动 5 个 int 单位，指向 a [5] 的地址，即 &a [5]"
        },
        {
            "id": 40,
            "content": "C 语言结构体类型变量在程序执行期间（）。",
            "options": [
                { "text": "A、部分成员驻留在内存中", "value": "A" },
                { "text": "B、只有一个成员驻留在内存中", "value": "B" },
                { "text": "C、所有成员一直驻留在内存中", "value": "C" },
                { "text": "D、没有成员驻留在内存中", "value": "D" }
            ],
            "answer": "C",
            "explanation": "结构体变量在定义时分配完整内存空间，所有成员同时存在于内存中，直到变量生命周期结束"
        },
        {
            "id": 41,
            "content": "以下关于 long、int 和 short 类型数据占用内存大小的叙述中正确的是",
            "options": [
                { "text": "A、由 C 语言编译系统决定", "value": "A" },
                { "text": "B、均占 4 个字节", "value": "B" },
                { "text": "C、由用户自己定义", "value": "C" },
                { "text": "D、根据数据的大小来决定所占内存的字节数", "value": "D" }
            ],
            "answer": "A",
            "explanation": "C 语言标准未规定各整型类型的具体字节数，由编译器和平台决定。例如，int 通常为 4 字节，short 为 2 字节，long 为 4 或 8 字节"
        },
        {
            "id": 42,
            "content": "若变量已正确定义，以下程序段的输出结果是 x=5.16894;printf(\"%f\\n\", (int)(x*1000+0.5)/(float)1000);",
            "options": [
                { "text": "A、5.17000", "value": "A" },
                { "text": "B、输出格式说明与输出项不匹配，输出无定值", "value": "B" },
                { "text": "C、5.168000", "value": "C" },
                { "text": "D、5.169000", "value": "D" }
            ],
            "answer": "D",
            "explanation": "x*1000=5168.94，+0.5=5169.44，(int) 强制转换为 5169，除以 1000.0 得 5.169，输出为 5.169000"
        },
        {
            "id": 43,
            "content": "下列运算符中优先级别最低的运算符是",
            "options": [
                { "text": "A、+", "value": "A" },
                { "text": "B、!=", "value": "B" },
                { "text": "C、||", "value": "C" },
                { "text": "D、<=", "value": "D" }
            ],
            "answer": "C",
            "explanation": "运算符优先级：+（算术）高于关系运算符（<=、!=），关系运算符高于逻辑或 ||。因此 || 优先级最低"
        },
        {
            "id": 44,
            "content": "以下程序段的输出结果是 int k, j, s;for (k = 2; k < 6; k++, k++){ s = 1; for (j = k; j < 6; j++) s += j;} printf(\"%d\\n\", s);",
            "options": [
                { "text": "A、15", "value": "A" },
                { "text": "B、10", "value": "B" },
                { "text": "C、24", "value": "C" },
                { "text": "D、9", "value": "D" }
            ],
            "answer": "B",
            "explanation": "外层循环 k 从 2 开始，每次递增 2（k++,k++），即 k=2,4。当 k=2 时，内层循环 j=2,3,4,5，s=1+2+3+4+5=15；当 k=4 时，内层循环 j=4,5，s=1+4+5=10。循环结束后 s 为最后一次赋值 10"
        },
        {
            "id": 45,
            "content": "有以下程序 main (){ int i; for (i=0; i<3; i++) switch (i) { case 1: printf(\"%d\", i); case 2: printf(\"%d\", i); default : printf(\"%d\", i); }} 执行后输出结果是",
            "options": [
                { "text": "A、011122", "value": "A" },
                { "text": "B、120", "value": "B" },
                { "text": "C、012020", "value": "C" },
                { "text": "D、012", "value": "D" }
            ],
            "answer": "A",
            "explanation": "i=0 时，执行 default，输出 0；i=1 时，执行 case1 输出 1，无 break，继续执行 case2 输出 1，继续执行 default 输出 1；i=2 时，执行 case2 输出 2，无 break，执行 default 输出 2。最终输出 011122"
        },
        {
            "id": 46,
            "content": "以下不能正确进行字符串赋初值的语句是（）。",
            "options": [
                { "text": "A、char str []=\"good!\";", "value": "A" },
                { "text": "B、char str [5]=\"good!\";", "value": "B" },
                { "text": "C、char *str=\"good!\";", "value": "C" },
                { "text": "D、char str [5]={'g','o','o','d',0};", "value": "D" }
            ],
            "answer": "B",
            "explanation": "\"good!\" 长度为 5（含 '\\0'），char str [5] 只能容纳 5 个字符，但字符串需要 6 个字节（5 字符 + 1 终止符），因此越界，初始化错误"
        },
        {
            "id": 47,
            "content": "对于建立函数的目的，正确的说法是",
            "options": [
                { "text": "A、提高程序的执行效率", "value": "A" },
                { "text": "B、减少程序的篇幅", "value": "B" },
                { "text": "C、减少程序文件所占的内存", "value": "C" },
                { "text": "D、提高程序的可读性", "value": "D" }
            ],
            "answer": "D",
            "explanation": "同第 17 题，函数的主要目的是模块化，提高可读性，而非效率、篇幅或内存"
        },
        {
            "id": 48,
            "content": "下列四个选项中，均是 C 语言关键字的选项是（）。",
            "options": [
                { "text": "A、if struct type", "value": "A" },
                { "text": "B、switch typedef continue", "value": "B" },
                { "text": "C、signed union scanf", "value": "C" },
                { "text": "D、auto enum include", "value": "D" }
            ],
            "answer": "B",
            "explanation": "A 中 type 不是关键字；C 中 scanf 是函数名；D 中 include 不是关键字；B 中 switch、typedef、continue 均为关键字"
        },
        {
            "id": 49,
            "content": " 若有说明:int n=2,*p=&n,*q=p;，则以下非法的赋值语句是（）。",
            "options": [
                { "text": "A、n=*q;", "value": "A" },
                { "text": "B、p=q;", "value": "B" },
                { "text": "C、p=n;", "value": "C" },
                { "text": "D、*p=*q;", "value": "D" }
            ],
            "answer": "C",
            "explanation": "p 是 int* 类型，n 是 int 类型，不能将 int 值直接赋给指针变量，类型不匹配，非法"
        },
        {
            "id": 50,
            "content": "使用共用体变量，不可以（）。",
            "options": [
                { "text": "A、同时访问所有成员", "value": "A" },
                { "text": "B、进行动态管理", "value": "B" },
                { "text": "C、简化程序设计", "value": "C" },
                { "text": "D、节省存储空间", "value": "D" }
            ],
            "answer": "A",
            "explanation": "共用体所有成员共享同一内存空间，同一时刻只能有一个成员有效，不能同时访问所有成员"
        },
        {
            "id": 51,
            "content": " 设 a 为整型变量，初值为 12，执行完语句 a+=a-=a*a 后，a 的值是（）。",
            "options": [
                { "text": "A、-264", "value": "A" },
                { "text": "B、144", "value": "B" },
                { "text": "C、552", "value": "C" },
                { "text": "D、264", "value": "D" }
            ],
            "answer": "A",
            "explanation": "右结合赋值。先计算 a-=a*a → a=12-144=-132；再计算 a+=-132 → a=-132+(-132)=-264"
        },
        {
            "id": 52,
            "content": "以下程序段的输出是 float a=3.1415;printf(\"|%6.0f|\\n\", a);",
            "options": [
                { "text": "A、|3.1415|", "value": "A" },
                { "text": "B、|   3|", "value": "B" },
                { "text": "C、|  3.0|", "value": "C" },
                { "text": "D、|  3.|", "value": "D" }
            ],
            "answer": "B",
            "explanation": "%6.0f 表示输出宽度为 6，保留 0 位小数，自动四舍五入。3.1415≈3，右对齐，左侧补 3 个空格，输出 |   3|"
        },
        {
            "id": 53,
            "content": "int a=3,b=2,c=1; if (a>b>c) a=b; else a=c; 则 a 的值为（）。",
            "options": [
                { "text": "A、2", "value": "A" },
                { "text": "B、3", "value": "B" },
                { "text": "C、1", "value": "C" },
                { "text": "D、0", "value": "D" }
            ],
            "answer": "C",
            "explanation": "a>b>c 按左结合计算，先算 a>b=3>2=1，再算 1>c=1>1=0，条件为假，执行 else a=c=1"
        },
        {
            "id": 54,
            "content": "C 语言中用于结构化程序设计的三种基本结构是（）。",
            "options": [
                { "text": "A、for、while、do-while", "value": "A" },
                { "text": "B、顺序结构、选择结构、循环结构", "value": "B" },
                { "text": "C、if、switch、break", "value": "C" },
                { "text": "D、if、for、continue", "value": "D" }
            ],
            "answer": "B",
            "explanation": "结构化程序设计的三种基本结构为顺序、选择（分支）、循环，与具体语句无关"
        },
        {
            "id": 55,
            "content": "以下程序的输出结果是 main (){ int x, i; for (i = 1; i <= 100; i++) { x = i; if ( ++x % 2 == 0) if ( ++x % 3 == 0 ) if ( ++x % 7 == 0) printf(\"%d \", x); } printf(\"\\n\");}",
            "options": [
                { "text": "A、28 70", "value": "A" },
                { "text": "B、39 81", "value": "B" },
                { "text": "C、42 84", "value": "C" },
                { "text": "D、26 68", "value": "D" }
            ],
            "answer": "A",
            "explanation": "循环中 i 从 1 到 100，x=i 后连续三次自增：++x→x=i+1，++x→i+2，++x→i+3。要求 i+3 同时被 2、3、7 整除，即 i+3 是 42 的倍数。在 1-100 范围内，i=25：x=25→++x=26（偶）→++x=27（%3=0）→++x=28（%7=0），输出 28；i=67：x=67→++x=68（偶）→++x=69（%3=0）→++x=70（%7=0），输出 70。因此正确输出为 28 和 70，选项 A 正确"
        },
        {
            "id": 56,
            "content": "下列数组说明中，正确的是（）。",
            "options": [
                { "text": "A、int array [][];", "value": "A" },
                { "text": "B、int array [3][];", "value": "B" },
                { "text": "C、int array [][4];", "value": "C" },
                { "text": "D、int array [][][5];", "value": "D" }
            ],
            "answer": "C",
            "explanation": "二维数组定义时，行长度可省略，列长度必须指定。int array [][4] 正确，其余选项列长度未指定或格式错误"
        },
        {
            "id": 57,
            "content": "用户定义的函数不可以调用的函数是（）。",
            "options": [
                { "text": "A、本文件外的", "value": "A" },
                { "text": "B、main 函数", "value": "B" },
                { "text": "C、本函数下面定义的", "value": "C" },
                { "text": "D、非整型返回值的", "value": "D" }
            ],
            "answer": "B",
            "explanation": "main 函数是程序入口，只能由系统调用，用户函数不能调用 main 函数"
        },
        {
            "id": 58,
            "content": "以下叙述中正确的是（）。",
            "options": [
                { "text": "A、C 语言中的函数不可以单独进行编译", "value": "A" },
                { "text": "B、C 语言中的每条可执行语句最终都将被转换成二进制的机器指令", "value": "B" },
                { "text": "C、C 源程序经编译形成的二进制代码可以直接运行", "value": "C" },
                { "text": "D、C 语言的源程序不必通过编译就可以直接运行", "value": "D" }
            ],
            "answer": "B",
            "explanation": "A 错误，函数属于源文件一部分，可随文件编译；B 正确，可执行语句编译为机器指令，注释等非执行语句不编译；C 错误，编译后需链接为可执行文件；D 错误，必须编译链接"
        },
        {
            "id": 59,
            "content": "已知 p，p1 为指针变量，a 为数组名，j 为整型变量，下列赋值语句中不正确的是（）。",
            "options": [
                { "text": "A、p=&a [j];", "value": "A" },
                { "text": "B、p=a;", "value": "B" },
                { "text": "C、p=10;", "value": "C" },
                { "text": "D、p=&j,p=p1;", "value": "D" }
            ],
            "answer": "C",
            "explanation": "指针变量 p 需赋值地址值，10 是整数，不是地址，赋值错误。A 取数组元素地址，B 数组名隐式转换为指针，D 正确"
        },
        {
            "id": 60,
            "content": "定义共用体的关键字是",
            "options": [
                { "text": "A、union", "value": "A" },
                { "text": "B、typedef", "value": "B" },
                { "text": "C、enum", "value": "C" },
                { "text": "D、struct", "value": "D" }
            ],
            "answer": "A",
            "explanation": "union 用于定义共用体，struct 是结构体，enum 是枚举，typedef 用于类型定义"
        },
        {
            "id": 61,
            "content": "putchar 函数可以向终端输出一个（）。",
            "options": [
                { "text": "A、字符串", "value": "A" },
                { "text": "B、字符或字符型变量值", "value": "B" },
                { "text": "C、实型变量值", "value": "C" },
                { "text": "D、整型变量表达式值", "value": "D" }
            ],
            "answer": "B",
            "explanation": "putchar 函数参数为字符型，可输出单个字符或字符变量，不能直接输出字符串、实型或整型值"
        },
        {
            "id": 62,
            "content": "下列程序的输出结果是（）。main (){int a=011;printf(\"%d\\n\",++a);}",
            "options": [
                { "text": "A、12", "value": "A" },
                { "text": "B、10", "value": "B" },
                { "text": "C、11", "value": "C" },
                { "text": "D、9", "value": "D" }
            ],
            "answer": "B",
            "explanation": "011 是八进制数，转换为十进制 9。++a 先自增到 10，输出 10"
        },
        {
            "id": 63,
            "content": "在 C 语言中，if 语句后的一对原括号中，用以决定分支的流程的表达式（）。",
            "options": [
                { "text": "A、只能用关系表达式", "value": "A" },
                { "text": "B、只能用逻辑表达式", "value": "B" },
                { "text": "C、只能用逻辑表达式或关系表达式", "value": "C" },
                { "text": "D、可用任意表达式", "value": "D" }
            ],
            "answer": "D",
            "explanation": "if 条件可以是任意表达式，非零为真，零为假，不限于关系或逻辑表达式"
        },
        {
            "id": 64,
            "content": "以下程序段的输出结果是 int i, j, m = 0;for (i = 1; i <= 15; i += 4){ for (j = 3; j <= 19; j += 4) m++;} printf(\"%d\\n\", m);",
            "options": [
                { "text": "A、15", "value": "A" },
                { "text": "B、12", "value": "B" },
                { "text": "C、20", "value": "C" },
                { "text": "D、25", "value": "D" }
            ],
            "answer": "C",
            "explanation": "外层循环 i=1,5,9,13（共 4 次）；内层循环 j=3,7,11,15,19（共 5 次）。m++ 执行 4×5=20 次，输出 20"
        },
        {
            "id": 65,
            "content": "以下程序中，while 循环的循环次数是______main (){ int i=0; while (i<10) { if (i<1) continue; if (i==5) break; i++; }}",
            "options": [
                { "text": "A、死循环，不能确定次数", "value": "A" },
                { "text": "B、6", "value": "B" },
                { "text": "C、4", "value": "C" },
                { "text": "D、1", "value": "D" }
            ],
            "answer": "A",
            "explanation": "i=0 时，i<1 成立，执行 continue，跳过 i++，i 始终为 0，循环条件永远成立，死循环"
        },
        {
            "id": 66,
            "content": "若有 char s1 []=\"abc\",s2 [20],*t=s2;gets (t); 则下列语句中能够实现当字符串 s1 大于字符串 s2 时，输出 s2 的语句是（）。",
            "options": [
                { "text": "A、if (strcmp (s2,s1)>0) puts (s2);", "value": "A" },
                { "text": "B、if (strcmp (s1,t)>0) puts (s2);", "value": "B" },
                { "text": "C、if (strcmp (s1,s1)>0) puts (s2);", "value": "C" },
                { "text": "D、if (strcmp (s2,t)>0) puts (s2);", "value": "D" }
            ],
            "answer": "B",
            "explanation": "strcmp (s1,s2)>0 表示 s1 大于 s2，t 指向 s2，因此 strcmp (s1,t)>0 正确，此时输出 s2"
        },
        {
            "id": 67,
            "content": "若调用一个函数，且此函数中没有 return 语句，则正确的说法是：该函数（）。",
            "options": [
                { "text": "A、没有返回值", "value": "A" },
                { "text": "B、返回若干个系统默认值", "value": "B" },
                { "text": "C、返回一个不确定的值", "value": "C" },
                { "text": "D、能返回一个用户所希望的值", "value": "D" }
            ],
            "answer": "C",
            "explanation": "函数未显式 return 时，若返回类型为非 void，会返回函数栈空间的不确定值；若为 void，则无返回值。题目未说明返回类型，默认 int，因此返回不确定值"
        },
        {
            "id": 68,
            "content": "以下选项中合法的用户标识符是______。",
            "options": [
                { "text": "A、_2Test", "value": "A" },
                { "text": "B、long", "value": "B" },
                { "text": "C、A.dat", "value": "C" },
                { "text": "D、3Dmax", "value": "D" }
            ],
            "answer": "A",
            "explanation": "标识符由字母、数字、下划线组成，不能以数字开头，不能是关键字。A 合法；B 是关键字；C 含非法字符.；D 以数字开头"
        },
        {
            "id": 69,
            "content": " 若有下列定义，则对 a 数组元素地址的正确引用是（）。 int a [5],*p=a;",
            "options": [
                { "text": "A、*(p+5)", "value": "A" },
                { "text": "B、*&a[5]", "value": "B" },
                { "text": "C、*p+2", "value": "C" },
                { "text": "D、*(a+2)", "value": "D" }
            ],
            "answer": "D",
            "explanation": "A 是 p+5 指向的元素值，越界；B 中 a [5] 越界；C 是 p（a [0]）的值 + 2；D 中 a+2 是 &a [2]，正确"
        },
        {
            "id": 70,
            "content": "C 语言中，定义结构体的保留字是（）。",
            "options": [
                { "text": "A、struct", "value": "A" },
                { "text": "B、union", "value": "B" },
                { "text": "C、enum", "value": "C" },
                { "text": "D、typedef", "value": "D" }
            ],
            "answer": "A",
            "explanation": "struct 用于定义结构体，union 是共用体，enum 是枚举，typedef 是类型定义"
        },
        {
            "id": 71,
            "content": "若 a、b、c、d 都是 int 类型变量且初值为 0，以下选项中不正确的赋值语句是",
            "options": [
                { "text": "A、a=b=c=100;", "value": "A" },
                { "text": "B、d=(c=22)-(b++);", "value": "B" },
                { "text": "C、d++;", "value": "C" },
                { "text": "D、c+b;", "value": "D" }
            ],
            "answer": "D",
            "explanation": "C 语句必须以分号结尾。A、B、C 都是合法语句（A 缺少分号？原文选项可能漏写，但 D 是表达式，不是语句）"
        },
        {
            "id": 72,
            "content": "已知 i、j、k 为 int 型变量，若从键盘输入：1，2，3＜回车＞，使 i 的值为 1、j 的值为 2、k 的值为 3，以下选项中正确的输入语句是",
            "options": [
                { "text": "A、scanf(\"%d %d %d\",&i,&j,&k);", "value": "A" },
                { "text": "B、scanf(\"%d,%d,%d\",&i,&j,&k);", "value": "B" },
                { "text": "C、scanf(\"%2d%2d%2d\",&i,&j,&k);", "value": "C" },
                { "text": "D、scanf(\"i=%d,j=%d,k=%d\",&i,&j,&k);", "value": "D" }
            ],
            "answer": "B",
            "explanation": "输入数据用逗号分隔，scanf 格式控制符需包含逗号，与输入格式匹配，B 正确"
        },
        {
            "id": 73,
            "content": "以下程序的运行结果是 main (){ int a=2, b= -1, c=2 ;if(a< b) if(b< 0) c=0; else c+=1; printf(\"%d\\n\", c );}",
            "options": [
                { "text": "A、0", "value": "A" },
                { "text": "B、2", "value": "B" },
                { "text": "C、1", "value": "C" },
                { "text": "D、3", "value": "D" }
            ],
            "answer": "B",
            "explanation": "a<b（2<-1）为假，直接跳过整个 if-else 结构，c 保持原值 2，输出 2"
        },
{
    "id": 74,
    "content": "结构化程序设计所规定的三种基本控制结构是（）。",
    "options": [
    { "text": "A、树形、网形、环形", "value": "A" },
    { "text": "B、输入、处理、输出", "value": "B" },
    { "text": "C、主程序、子程序、函数", "value": "C" },
    { "text": "D、顺序、选择、循环", "value": "D" }
    ],
    "answer": "D",
    "explanation": "同第 54 题，三种基本结构为顺序、选择、循环"
},
{
    "id": 75,
    "content": "以下叙述正确的是:",
    "options": [
    { "text": "A、用 do-while 构成循环时，只有在 while 后的表达式为非零时结束循环", "value": "A" },
    { "text": "B、do-while 语句构成的循环不能用其它语句构成的循环来代替。", "value": "B" },
    { "text": "C、用 do-while 构成循环时，只有在 while 后的表达式为零时结束循环", "value": "C" },
    { "text": "D、do-while 语句构成的循环只能用 break 语句退出。", "value": "D" }
    ],
    "answer": "C",
    "explanation": "do-while 循环条件为真时继续循环，为假时结束。因此表达式为零时（假）结束循环，C 正确；A 错误；B 错误，循环结构可相互转换；D 错误，条件为假时自然退出"
},{
    "id": 76,
    "content": "若使用一维数组名作函数实参，则以下正确的说法是（）。",
    "options": [
        {"text": "A、必须在主调函数中说明此数组的大小", "value": "A"},
        {"text": "B、实参数组类型与形参数组类型可以不匹配", "value": "B"},
        {"text": "C、实参数组名与形参数组名必须一致", "value": "C"},
        {"text": "D、在被调用函数中,不需要考虑形参数组的大小", "value": "D"}
    ],
    "answer": "A",
    "explanation": "当用一维数组名作实参时，主调函数需明确数组大小（或通过初始化隐含），形参数组类型必须与实参一致，数组名可不同，被调用函数需通过参数或全局变量获取数组长度"
},
{
    "id": 77,
    "content": "以下错误的描述是：函数调用可以（）。",
    "options": [
        {"text": "A、做为一个函数的形参", "value": "A"},
        {"text": "B、出现在执行语句中", "value": "B"},
        {"text": "C、做为一个函数的实参", "value": "C"},
        {"text": "D、出现在一个表达式中", "value": "D"}
    ],
    "answer": "A",
    "explanation": "函数调用可以作为实参（传递返回值）、出现在表达式或执行语句中，但不能直接作为形参（形参是变量，不是函数调用）"
},
{
    "id": 78,
    "content": "以下叙述中正确的是（）。",
    "options": [
        {"text": "A、构成C程序的基本单位是函数", "value": "A"},
        {"text": "B、所有被调用的函数一定要在调用之前进行定义", "value": "B"},
        {"text": "C、可以在一个函数中定义另一个函数", "value": "C"},
        {"text": "D、main()函数必须放在其它函数之前", "value": "D"}
    ],
    "answer": "A",
    "explanation": "C程序由一个或多个函数组成，main是程序入口；函数需在调用前声明（可在定义前声明）；C语言不允许函数嵌套定义；main函数位置无强制要求"
},
{
    "id": 79,
    "content": "char h,*s=&h;可将字符'H'通过指针存入变量h中的语句是（）。",
    "options": [
        {"text": "A、s='H'", "value": "A"},
        {"text": "B、*s='H';", "value": "B"},
        {"text": "C、s=H;", "value": "C"},
        {"text": "D、*s=H;", "value": "D"}
    ],
    "answer": "B",
    "explanation": "s是指向h的指针，*s表示h变量本身。*s='H'等价于h='H'，正确；A中s是指针，不能直接赋值字符；C/D中H未加单引号，视为变量名（未定义）"
},
{
    "id": 80,
    "content": "以下选项中不是C语句的是",
    "options": [
        {"text": "A、{   ;   }", "value": "A"},
        {"text": "B、;", "value": "B"},
        {"text": "C、{int  i;  i++;  printf(“%d\\n”,  i);  } ", "value": "C"},
        {"text": "D、a=5,c=10 ", "value": "D"}
    ],
    "answer": "D",
    "explanation": "C语句以分号结尾。A是复合语句（含空语句）；B是空语句；C是复合语句；D是表达式，缺少分号，不是语句"
},
{
    "id": 81,
    "content": "以下程序的输出结果是（）。\nmain()\n{float x=3.6;\n  int  i;\n i=(int)x; \n  printf(\"x=%f,i=%d\\n\",x,i);\n}",
    "options": [
        {"text": "A、x=3 i=3.600000", "value": "A"},
        {"text": "B、x=3.600000,i=4", "value": "B"},
        {"text": "C、x=3,i=3", "value": "C"},
        {"text": "D、x=3.600000,i=3", "value": "D"}
    ],
    "answer": "D",
    "explanation": "(int)x强制类型转换为整数3，i=3；printf中%f输出x保留6位小数为3.600000，%d输出i为3"
},
{
    "id": 82,
    "content": "main()\n{int x=1,a=0,b=0;\nswitch (x)\n  { case  0: b++;\n    case  1: a++;\n    case  2: a++;b++;\n}                     printf(\"a=%d,b=%d\",a,b);\n}该程序的输出结果是( )",
    "options": [
        {"text": "A、2,2", "value": "A"},
        {"text": "B、2,1", "value": "B"},
        {"text": "C、1,1", "value": "C"},
        {"text": "D、1,0", "value": "D"}
    ],
    "answer": "B",
    "explanation": "x=1匹配case 1，执行a++（a=1），无break，继续执行case 2，执行a++（a=2）和b++（b=1），最终输出a=2,b=1"
},
{
    "id": 83,
    "content": "以下不是无限循环的语句为（）。",
    "options": [
        {"text": "A、for(;;x++=i);", "value": "A"},
        {"text": "B、while(1){x++;}", "value": "B"},
        {"text": "C、for(y=0,x=1;x>++y;x=i++) i=x;", "value": "C"},
        {"text": "D、for(i=10;;i--) sum+=i;", "value": "D"}
    ],
    "answer": "C",
    "explanation": "A/B/D均为条件恒真的循环（for无终止条件、while(1)）；C的循环条件为x>++y，当x<=y时退出循环，非无限循环"
},
{
    "id": 84,
    "content": "以下程序段的输出结果是\nint  x= 3;\ndo \n{   printf(“%3d”, x-=2);\n} while (!(--x));",
    "options": [
        {"text": "A、死循环", "value": "A"},
        {"text": "B、1 -2 ", "value": "B"},
        {"text": "C、3 0", "value": "C"},
        {"text": "D、1", "value": "D"}
    ],
    "answer": "B",
    "explanation": "第一次循环：x=3→x-=2=1，输出1；--x=0，!(--x)=!0=1（条件为真，继续循环）。第二次循环：x=0→x-=2=-2，输出-2；--x=-3，!(--x)=!-3=0（条件为假，退出循环）"
},
{
    "id": 85,
    "content": "若有说明 int a[3][4];则对a数组元素的正确引用是（）。",
    "options": [
        {"text": "A、a[1+1][0]", "value": "A"},
        {"text": "B、a[1,3]", "value": "B"},
        {"text": "C、a[2][4]", "value": "C"},
        {"text": "D、a(2)(1)", "value": "D"}
    ],
    "answer": "A",
    "explanation": "A中1+1=2，a[2][0]是合法元素（行下标0-2，列下标0-3）；B使用逗号表达式，等价于a[3]（非法）；C列下标4越界；D使用括号而非方括号，非法"
},
{
    "id": 86,
    "content": "以下对C语言函数的描述中，正确的是（）。",
    "options": [
        {"text": "A、C函数既可以嵌套定义又可以递归调用", "value": "A"},
        {"text": "B、C程序必须由一个或一个以上的函数组成", "value": "B"},
        {"text": "C、函数必须有返回值,否则不能使用函数", "value": "C"},
        {"text": "D、C程序中有调用关系的所有函数必须放在同一个程序文件中", "value": "D"}
    ],
    "answer": "B",
    "explanation": "C语言不允许函数嵌套定义，但允许递归调用；程序必须包含至少一个函数（main）；函数可以声明为void类型，无返回值；函数可分布在不同文件中，通过声明引用"
},
{
    "id": 87,
    "content": "下列叙述中正确的是（）。",
    "options": [
        {"text": "A、C语言的子程序有过程和函数两种", "value": "A"},
        {"text": "B、C语言编译时不检查语法", "value": "B"},
        {"text": "C、C语言的函数可以嵌套定义", "value": "C"},
        {"text": "D、C语言所有函数都是外部函数", "value": "D"}
    ],
    "answer": "D",
    "explanation": "C语言中子程序统称为函数，无“过程”概念；编译时会检查语法错误；不允许嵌套定义函数；默认情况下，所有函数都是外部函数（可被其他文件调用）"
},
{
    "id": 88,
    "content": "若有double *p,x[10];int i=5;使指针变量p指向元素x[5]的语句为（）。",
    "options": [
        {"text": "A、p=x;", "value": "A"},
        {"text": "B、p=x[i];", "value": "B"},
        {"text": "C、p=&(x+i)", "value": "C"},
        {"text": "D、p=&x[i];", "value": "D"}
    ],
    "answer": "D",
    "explanation": "x是数组名，x+i表示x[i]的地址，&x[i]等价于x+i。p=&x[i]直接指向x[5]；A中p=x指向x[0]；B中x[i]是double类型，不能赋值给指针；C中x+i是地址，&(x+i)是地址的地址，类型不匹配"
}
        ]