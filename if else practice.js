// java script if else practice module

            // student result checker
            let name = prompt("Enter your Name");
            let age = Number(prompt("Enter your age"));
            let Marks = Number(prompt("Enter your Marks"));
            console.log(name);
            console.log(age);
            console.log(Marks);
            console.log(typeof name);
            console.log(typeof age);
            console.log(typeof Marks);
            let isAdult;
            let grade;

            if (Marks >= 40 && Marks >= 90 && Marks <= 100) {
              console.log("passed");
              console.log("A+");
              grade = "A+";
            } else if (Marks >= 80 && Marks <= 89) {
              console.log("A");
              grade = "A";
            } else if (Marks >= 70 && Marks <= 79) {
              grade = "B";
              console.log("B");
            } else if (Marks >= 60 && Marks <= 69) {
              console.log("C");
              grade = "C";
            } else if (Marks <= 40) {
              grade = "FAIL";
              console.log("FAIL");
            } else {
              console.log("FAIL");
            }

            if (age >= 18) {
              isAdult = "adult";
            } else {
              isAdult = "minor";
            }
            alert(
              " Name  " +
                name +
                " : " +
                " Age " +
                age +
                " : " +
                " Marks  " +
                Marks +
                " : " +
                " Student  " +
                isAdult +
                " : " +
                " Grade  " +
                grade +
                " : ",
            );
            // university Admission Checker
            let name = prompt("Enter your Name");
            let Marks = prompt("Enter your Marks");
            let Age = prompt("Enter your Age");
            let Docs = prompt("docs are submitted true or false");
            if (Marks >= 80 && Age <= 22 && Docs == "true") {
              console.log("Egligible");
              alert("Egligible");
            } else {
              console.log(" Not Egligible ");
              alert(" Not Egligible ");
            }
            // login System
            let User=(prompt("Username"))
            let pass=(prompt("Password"))
            if( User == "admin" && pass == 12345){
              alert("login Succesful")
            }
            else{

              alert("Invalid Credentials")
      }
    //   Shopping Discount Calculator
      let Customer = prompt("enter your name")
      let Amount = Number(prompt("enter Total Bill"))
      if (Amount>=5000 ){
        console.log(Customer);
        console.log("Total bill is " + Amount);
        console.log("20% Discount");
        alert("20% Discount");
        console.log("Amount to be paid after discount is " + Amount * 0.2);

      }
      else if( Amount<=3000){
        console.log(Customer);
        console.log( "Total Bill is " + Amount);
        console.log("10% Discount");
        alert("10% Discount");
        console.log("Amount to be paid after discount is " + Amount * 0.3);


      }
      else{
        console.log("no discount");
        alert("no discount");

      }
    //   Even or Odd number Checker
      let num = Number( prompt("enter the number"))
      console.log(num);
      alert(num);
      console.log(typeof num);

      if (num % 2 == 0) {
          alert("The number is even.");
      } else {
          alert("The number is odd.");
      }

    //   Simple Calculator
      let num1 = Number(prompt("enter 1st digit"))
      let num2 = Number(prompt("enter 2nd digit"))
      let opt = prompt("chose your operator", "+","-","/","*")
      if( opt == "+"){
        console.log(num1+num2);

      }
      else if(opt == "-"){

        console.log(num1-num2);
      }
      else if(opt == "*"){

        console.log(num1*num2);
      }
      else if (opt == "/"){

        console.log(num1/num2);
      }
      else{
        console.log(Error);

      }
      // Final mega challenge
      let name = prompt("Enter your name")
      let age = Number( prompt("Enter your age"))
      let city = prompt("Enter your city Name")
      let Marks = Number( prompt("Enter your marks"))
      let Att = Number(prompt("Enter your Attendance Percentage"))
      let fee = prompt("Enter your fee status true or false")
      let isAdult;
      let exam;
      let grade;
      console.log(name);
      console.log(age);
      console.log(Marks);
      console.log(Att);
      console.log(fee);
      console.log(typeof name);
      console.log(typeof age);
      console.log(typeof Marks);
      console.log(typeof Att);
      console.log(typeof fee);


            if (Marks >= 40 && Marks >= 90 && Marks <= 100) {
              console.log("passed");
              console.log("A+");
              grade = "A+";
            } else if (Marks >= 80 && Marks <= 89) {
              console.log("A");
              grade = "A";
            } else if (Marks >= 70 && Marks <= 79) {
              grade = "B";
              console.log("B");
            } else if (Marks >= 60 && Marks <= 69) {
              console.log("C");
              grade = "C";
            } else if (Marks <= 40) {
              grade = "FAIL";
              console.log("FAIL");
            } else {
              console.log("FAIL");
            }

            if (age >= 18) {
              isAdult = "adult";
            } else {
              isAdult = "minor";
            }
            if(Att>=75 && fee== "true"){
              console.log("eligible");
              alert("eligible");
              exam= "eligible"

            }
            else{

              console.log("not eligible");
              alert("not eligible");
              exam= "not eligible"
            }
            alert(
              " Name  " +
                name +

                " : " +
              " City  " +
                city +

                " : "

                +
                " Age " +
                age +
                " : " +
                " Marks  " +
                Marks +
                " : " +
                " Exam Eligiblity " +
                exam +
                " : " +
                " Student  " +
                isAdult +
                " : " +
                " Grade  " +
                grade +
                " : ",
            );
