// let heading = document.getElementById('heading');
// let text = document.getElementById('text');
let para = document.getElementById('para')
function bold(){
    // text.style.fontWeight='800'
    if(para.style.fontWeight !== '800')
    para.style.fontWeight='800'
    else{
        para.style.fontWeight='400' 
    }
}
function Italic(){
    if(para.style.fontStyle !== 'Italic')
    para.style.fontStyle='Italic'
    else{
        para.style.fontStyle='normal' 
    }
}
function Underline(){
    if(para.style.textDecoration !== 'underline')
    para.style.textDecoration='underline'
    else{
        para.style.textDecoration='none' 
    }
}
function align_left(){
    if(para.style.textAlign !== 'left')
    para.style.textAlign='left'
    else{
        para.style.textAlign='center' 
    }
}
function align_Right(){
    if(para.style.textAlign !== 'right')
    para.style.textAlign='right'
    else{
        para.style.textAlign='center' 
    }
}
let color_change = document.getElementById('color1');
function color_change1(){
    para.style.color = color_change.value
}
function LowerCase(){
    para.innerText.toLocaleLowerCase();

}