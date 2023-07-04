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
  $(".summarytextright").text(" " + extrashoursum() + " hours");
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
  $(".summarytextright").text(" " + extrashoursum() + " hours");
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
// Declarations

let extraboxIroningstate = true;
let extraboxLaundrystate = true;
let extraboxWindowsstate = true;
let extraboxFridgestate = true;
let extraboxOvenstate = true;

// calculator function
function bedbathhoursum() {
  return bathroomx + bedroomx;
}

function extrashoursum() {
  let x = 0;
  if (extraboxIroningstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxFridgestate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxLaundrystate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxOvenstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  if (extraboxWindowsstate) {
    console.log("not clicked");
  } else {
    ++x;
  }
  return x;
}

// Button 1
// Listen and log clicks
// declare state

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

$(".summarytextright").text(" " + extrashoursum() + " hours");
