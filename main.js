console.log("hello")
let containerE1 = document.getElementById('container');



let c=document.getElementById('every')
let z=document.getElementById('ran')
z.addEventListener('click',btnclicked)
c.addEventListener('click',secondbtnclicked)

function btnclicked(){
    //input
    let j=document.getElementById('first').value
    let a=document.getElementById('last').value
    let outputspan=document.getElementById('output')
    let first=j
    let last=a
    let x=(Math.random()*(1,5))
    
    names=['The Destroyer','The Pacifier','The Almighty','The Holy','The Stupid','The Benevalent']
    let u=Math.round(x)
    z=names[u]
    // output
    outputspan.innerHTML=namegenerator(j,z,a)
}

function secondbtnclicked() {
    let a=document.getElementById('first').value
    let c=document.getElementById('last').value
    let outputscan=document.getElementById('output')
    z='The Destroyer'
    x='The Pacifier'
    f='The Almighty'
    h= 'The Holy'
    s='The Stupid'
    b='The Benevalent'
    d=((a +'  ' +z+'  '  + c)+"    "+
    (a +'  ' +x+'  '  + c)+"      "+
    (a +'  ' +f+'  '  + c)+"      "+
    (a +'  ' +h+'  '  + c)+"      "+
    (a +'  ' +s+'  '  + c)+"      "+
    (a +'  ' +b+'  '  + c)
    )
outputscan.innerHTML=d
}


function namegenerator(a,b,c) {
    // does the acual work
    nickname=(a +'  ' +b+'   '  + c)
    return nickname
    
}