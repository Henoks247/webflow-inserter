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

// calculator function
function bedbathhoursum() {
  return bathroomx + bedroomx;
}

function extrashoursum() {
  let x = 2;
  if ((extraboxIroningstate = false)) {
    ++x;
  }
  if ((extraboxFridgestate = false)) {
    ++x;
  }
  if ((extraboxLaundrystate = false)) {
    ++x;
  }
  if ((extraboxOvenstate = false)) {
    ++x;
  }
  if ((extraboxWindowsstate = false)) {
    ++x;
  }
  return x;
}

// Button 1
// Listen and log clicks
// declare state
let extraboxIroningstate = true;

$("#extraboxIroning").click(function () {
  // if here
  if (extraboxIroningstate) {
    extraboxIroningstate = false;
    console.log("made false");
  } else {
    extraboxIroningstate = true;
    console.log("made true");
    console.log(extrashoursum(), bedbathhoursum());
  }
});

// Button 2
// Listen and log clicks
// declare state
let extraboxLaundrystate = true;

$("#extraboxLaundry").click(function () {
  // if here
  if (extraboxLaundrystate) {
    extraboxLaundrystate = false;
    console.log("made false");
    console.log(extraboxLaundrystate);
  } else {
    extraboxLaundrystate = true;
    console.log("made true");
  }
});

// Button 3
// Listen and log clicks
// declare state
let extraboxWindowsstate = true;

$("#extraboxWindows").click(function () {
  // if here
  if (extraboxWindowsstate) {
    extraboxWindowsstate = false;
    console.log("made false");
  } else {
    extraboxWindowsstate = true;
    console.log("made true");
  }
});

// Button 4
// Listen and log clicks
// declare state
let extraboxFridgestate = true;

$("#extraboxFridge").click(function () {
  // if here
  if (extraboxFridgestate) {
    extraboxFridgestate = false;
    console.log("made false");
  } else {
    extraboxFridgestate = true;
    console.log("made true");
  }
});

// Button 5
// Listen and log clicks
// declare state
let extraboxOvenstate = true;

$("#extraboxOven").click(function () {
  // if here
  if (extraboxOvenstate) {
    extraboxOvenstate = false;
    console.log("made false");
  } else {
    extraboxOvenstate = true;
    console.log("made true");
  }
});
