        // print 1 to 100
        for(let i=0; i<=100; i++){
            console.log(i);

      }

    //   print even numbers
        for (let i = 0; i <= 101; i++) {
          if (i % 2 == 0) {
              document.write(i);
            document.write("even.");
          }

          document.write('<br/>')
      }

    //   print a multiplication table
        let j = prompt("enter a number to print a table");
        for (let i = 1; i <= 10; i++) {
          document.write(j + " x " + i);
          document.write(" = ");
          document.write(i * j);
          document.write("<br/>");
        }

    //   sum of number 1 -100
        let num = 0;
        for (i = 0; i <= 100; i++) {
          // document.write(i + i);

          // document.write(num + i);
          // num = num + i
          num += i

        }
        document.write(num);
    //   Fizz buzz Game

        for (let i = 0; i <= 100; i++) {
          if (i % 3 == 0) {
              document.write("Fizz.");
          } else if (i % 5 == 0) {
              document.write("Buzz.");
          } else {
              document.write("Fizz Buzz.");
          }
          document.write(i);
          document.write("<br/>");
        }
    //   pattern

        for (let i = 0; i <= 5; i++) {

          for (let j = 0; j <= i; j++) {

            document.write("*");
          }

          document.write("<br/>");
        }

      for (let i = 5; i >= 0; i--) {
        for (let j = 0; j <= i; j++)
           {
            document.write("*");
          }
        document.write("<br/>");
      }

      for (let i = 0; i <= 5; i++) {
        for (let j = 5; j >= i; j--) {
          document.write("&nbsp");
        }

        for (let j = 0; j <= i; j++) {
          document.write("*");
        }

        document.write("<br/>");
      }
    
      for (let i = 0; i <= 5; i++) {
        for (let j = 0; j <= i; j++) {
          document.write("&nbsp");
        }

        for (let j = 5; j >= i; j--) {
          document.write("*");
        }

        document.write("<br/>");
      }
