export function calculateTotal(purchases, applyDiscount) {
    const sum = purchases.reduce((total,item) => {
        return total + (item.count * item.price);
    }, 0);
    // let result = 0;
    // for (let i = 0; i < purchases.length; i++) { result += purchases[i].count * purchases[i].price; }
    // return result;

    if (applyDiscount) {
        return sum * 0.891;
    }
    return sum;
}


