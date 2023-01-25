function getElementsByAttribute(attribute){
    var allelement=document.getElementsByTagName("*");
    var res=[];
    for(var i=0;i<allelement.length;i++){
        if(allelement[i].getAttribute(attribute)){
            res.push(allelement[i]);  
        }
    }
    return res;

    //return an array of all elements having same attribute
}