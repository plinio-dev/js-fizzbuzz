/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */


//1 scrivere i numeri da 1 a 100


for (var i=1; i <= 100; i++) {

  //4 stampare FizzBuzz al posto dei numeri sia multipli di 3 che di 5
  if ( i %3 == 0  &&  i %5 == 0)   {
    console.log("FizzBuzz");
  }
    //2 stampare Fizz al posto dei multipli di 3
    else {
      if ( i %3 == 0 ) {
        console.log("Fizz");
      }
        //3 stampare Buzz al posto dei multipli di 5
        if ( i %5 == 0 ) {
          console.log("Buzz");
        }
    }
    console.log([i]);
}
