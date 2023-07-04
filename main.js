console.log("code link functionality check");

console.log(".extraheading.text()");

// let x = 0;
// // on button click
// document.getElementById("minusdiv1").on("click", () => {
//   console.log("get success");
//   // increment & set new value
//   $(".Inputfield1.w-input").val(++x);
// });

// $(".minusdiv1").on("click", () => {
//   // decrement & set new value
//   if (x > 0) {
//     $(".Inputfield1.w-input").val(--x);
//   }
// });

/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

// on input value change
$(".Inputfield1.w-input").change(function () {
  // convert input value to number
  const num = Number($(this).val());
  // if it's a number
  if (num) {
    // assign its value to x
    x = num;
  }
});
