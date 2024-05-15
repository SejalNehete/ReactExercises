
const input = [5, 7, 9, 11, 15, 17]

for (let i = 0; i < input.length-1; i++) {
    const temp=input[i]
    const next=temp+2
    if (temp[i+1]!==next){
        console.log(next)
        break;
    }
}
j