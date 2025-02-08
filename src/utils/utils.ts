export const isAlphanumeric = (ch:string):boolean=>{
    if(ch=="") return false;
    const charCode = ch.charCodeAt(0)
    return (
        (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) ||
        (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
        (charCode >= 0 && charCode <=9)
    )
}