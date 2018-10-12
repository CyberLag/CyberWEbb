const funk = require("./funk");

it("Borde ge multiplikation av två tal" , ()=> {
    var res = funk.multi(12,2);   
    if(res !== 24)
    {
    throw new Error("Värdet vi önskar är 24 " + res + " visades sif");
     
    }
    
})