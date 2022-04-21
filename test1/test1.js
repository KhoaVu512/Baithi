
function avgArr(arr) {
    arr = [1,2,3,4,5,6,7];
    console.log(arr.length)
    let newArr = [];

    let sum = 0;
    let avg = 0;
    for (let i = 0; i <= arr.length; i++) {
        if(i%2 === 0 ) {
            if (arr[i] % 2 === 1) {
                newArr.push(arr[i]);
                sum = sum + arr[i];
                avg = sum / newArr.length;
                console.log(avg);
                console.log(newArr);
            }
            arr[i] = avg
            console.log(arr)
        }

    }return avg;
}
alert(`mang tren co trung binh cong la ${avgArr()}`)


avgArr()

