
const colors = {
  color: 'red',
  printColor() {
    console.log(this.color)
  }
};

// print red correctly
colors.printColor();
// property ‘color’ of undefined
const f35 = colors.printColor;
f35();