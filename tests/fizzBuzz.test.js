        const fizzBuzz = require ('../fizzBuzz');
        
        test('return fizz', () => {
            expect(fizzBuzz.divide(3)).toMatch('Fizz');
        });

        test('return buzz', () => {
            expect(fizzBuzz.divide(5)).toMatch('Buzz');
        });

        test('fizzBuzz works', () => {
            expect(fizzBuzz.divide(15)).toMatch('FizzBuzz');
        });

        test('non divisible number', () => {
            expect(fizzBuzz.divide(4)).toEqual(4);
        });
