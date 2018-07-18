function difference(arr) {
    if(arr.length < 3) {
        console.log("This array must be longer");
    } else {
        var answer = []
        var x = 0
        var final = (arr[0].length + arr[1].length + arr[2].length);
        for(k = 0; k < arr.length - 3; k++) {
            if (final < (arr[k+1].length + arr[k+2].length + arr[k+3].length)) {
                final = (arr[k+1].length + arr[k+2].length + arr[k+3].length);
                x = k;
            } else {
            }
        }
        answer.push(arr[x+1], arr[x+2], arr[x+3])
        console.log(answer)
    }
}

difference(["This", "is", "an", "array"])