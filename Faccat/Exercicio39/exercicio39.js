let a = true;
let b = true;
let c = false;

alert('1 - '+ ((a && b)||(a || b))+' |'+ ' 2 - '+((a||b)&&(a&&b))+' |'+' 3 - '+ ((a || c && b) != (a != b) ));