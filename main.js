console.log("code link functionality check");

console.log($(".extraheading").text());

// For bedrooms

let bedroomx = 0;
// on button click
$(".plusdiv1").on("click", () => {
  console.log("get success");
  // increment & set new value
  $(".inputfield1.w-input").val(++bedroomx);
});

$(".minusdiv1").on("click", () => {
  // decrement & set new value
  if (bedroomx > 0) {
    $(".inputfield1.w-input").val(--bedroomx);
  }
});

/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

// on input value change
$(".inputfield1.w-input").change(function () {
  // convert input value to number
  const num = Number($(this).val());
  // if it's a number
  if (num) {
    // assign its value to x
    bedroomx = num;
  } else {
    console.log("Not a number");
  }
});

// For bathrooms

let bathroomx = 0;
// on button click
$(".plusdiv2").on("click", () => {
  console.log("get success");
  // increment & set new value
  $(".inputfield2.w-input").val(++bathroomx);
});

$(".minusdiv2").on("click", () => {
  // decrement & set new value
  if (bathroomx > 0) {
    $(".inputfield2.w-input").val(--bathroomx);
  }
});

/* This next part was added post-video recording added
  to make sure the plus and minus work with a manual entry of
  a number in the text input. If you type 5 into the input manually,
  and then press (+), it will count to 6 instead of starting to
  count at 1. Nice!!
  */

// on input value change
$(".inputfield2.w-input").change(function () {
  // convert input value to number
  const num = Number($(this).val());
  // if it's a number
  if (num) {
    // assign its value to x
    bathroomx = num;
  } else {
    console.log("Not a number");
  }
});
