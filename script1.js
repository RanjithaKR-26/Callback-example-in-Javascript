function printString() {
  console.log("Tom");
  setTimeout(() => {
    console.log("Jacob");
  }, 300);
  console.log("Mark");
}

printString();
