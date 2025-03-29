export function random(len: number){
    let options = "asknsdnifnvin21131231kncsdn";
    let length = options.length;

    let ans:string = ""
    for(let i : number = 0; i < len; i++){
        ans += options[Math.floor(Math.random() * length)];
    }
    return ans;

}