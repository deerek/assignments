validateAddress = (str) =>{
    splitAddress = str.split(".")
    let answer;
    if (splitAddress.length < 4){
        return false
    } else {
        for (let i = 0; i < splitAddress.length; i++) {
            if (Number(splitAddress[i]) <= 255 && Number(splitAddress[i] >= 0)) {
                answer = true
            } else {
                answer = false
                break
            };
        }
    }
    return answer;
}