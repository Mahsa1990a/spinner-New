let str = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];

const spinner2 = function(string) {
  let delay = 0
  for (let item of string) {
    //console.log(item);
    setTimeout(() => {
      process.stdout.write(item);
    }, delay);
    delay += 300;
  }
  setTimeout(() => {
    console.log("\n");
  }, delay); 
  //OR:
//setTimeout(() => process.stdout.write('\n'), delay);// New line
};
spinner2(str);

// let delay = 100;
// let animation = ['|', '/', '-', '\\'];
// for (let i = 0; i < 10; i++) {
//   for (let frame = 0; frame < animation.length; frame++) {
//    setTimeout(() => {
//       process.stdout.write(`\r${animation[frame]}   `);
//     }, delay + (frame * 200));
//   };
//   delay += 800;
// };