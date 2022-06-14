let n = 100, r = 2; // 100C2
let lower = n - r; // Lower Bound
let answer = 1;
for(let i = n;i>lower;i--){
answer *= i;
}
for(let i = r;r>1;r--){
answer /= i;

}
console.log(answer);