const n = 5;

for (let i = n; i >= 1; i--) {

  // print leading spaces
  let spaces = " ".repeat(n - i);

  let row = "";
  let num = 1;

  for (let j = 0; j < i; j++) {

    row += num;

    if (j < i - 1) {
      row += " ";
    }

    num = (num * (i - 1 - j)) / (j + 1);
  }

  console.log(spaces + row);
}