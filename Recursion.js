// for (let i = 1; i <= 5; i++){
//     console.log(i);
// }

// let i = 1; 
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// let i = 1; 
// for (; i <= 5 ;){
//     console.log(i);
//     i++;
// }

// let i = 1; 
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// recursion is a function which calls itself

// function main() {
//     console.log('hello');
//     main();
// }

// main();

/*
    main():
        print hello
        main():
            print hello
            main():
                print hello
                main():
                    print hello
                    main()...
*/

// function sayHello(times) {
//     if (times == 0) return;

//     console.log('hello');
//     sayHello(times - 1);
// }

// sayHello(5);

/*
    sayHello(5):
        times = 5, 5 == 0, false
        print hello
        sayHello(4):
            times = 4, 4 == 0, false
            print hello
            sayHello(3):
                times = 3, 3 == 0, false
                print hello
                sayHello(2):
                    times = 2, 2 == 0, false
                    print hello
                    sayHello(1):
                        times = 1, 1 == 0, false
                        print hello
                        sayHello(0):
                            times = 0, 0 == 0, true
                            return
        
*/

// print the first N natural numbers
// print(5) => 1 2 3 4 5
// print(3) => 1 2 3
// print(7) => 1 2 3 4 5 6 7

// function print(number) {
//     if (number == 0) return;

//     print(number - 1);
//     console.log(number);
// }

// print(5);

/*
    print(5):
        number = 5, 5 == 0, false
        print(4):
            number = 4, 4 == 0, false
            print(3):
                number = 3, 3 == 0, false
                print(2):
                    number = 2, 2 == 0, false
                    print(1):
                        number = 1, 1 == 0, false
                        print(0):
                            number = 0, 0 == 0, true
                            return
                        console.log(number);
                    console.log(number);
                console.log(number);
            console.log(number);
        console.log(number);

        print(5)
*/

// sum of N natural numbers
// sum(5) = 1 + 2 + 3 + 4 + 5 = 15
// sum(3) = 1 + 2 + 3 = 6
// sum(10) = 1 + 2 + 3+...+ 10 = 55

// function S(N) {
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(10));

// function F(N) {
//     if (N == 1) return 1;
//     return F(N - 1) * N;
// }

// console.log(F(5));

// function S(N) {
//     if (N == 0) return 0;
//     if (N == 1) return 1;
//     return S(N - 1) + N;
// }

// console.log(S(3));