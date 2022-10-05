
function Round(num){
  return Math.round((num) * 100) / 100
}
hotdogs = prompt("How many hotdogs do you want?")
fries = prompt("How many fries do you want?")
sodas = prompt("How many sodas do you want?")
subtotal = Round((hotdogs*4.25) + (fries*2.60) + (sodas*1.50))
if (subtotal > 20){
  discountsubtotal = Round(subtotal*0.9)
  discount = Round(subtotal * 0.1);
} else {
  discountsubtotal = subtotal;
  discount = 0;
}
tax = Round(discountsubtotal*.0625)
plustax = Round(discountsubtotal + tax);

document.write("Items ordered: " + hotdogs + " hotdogs, " + fries + " fries, " + sodas + " sodas")
document.write("<br>")
document.write("Original subtotal: " + subtotal)
document.write("<br>")
document.write("Discounted subtotal: " + discountsubtotal)
document.write("<br>")
document.write("Discount: " + discount)
document.write("<br>")
document.write("Tax: " + tax)
document.write("<br>")
document.write("Final total: " + plustax)