
const consultarApi = async(accion, sueldo, ahorro) => {
    try {
        const resp   = await fetch(`http://localhost:8080/rest/msdxc/${ accion }?sueldo=${ sueldo }&ahorro=${ ahorro }/`);
        const data  = await resp.json(); 
        //console.log(data)
        return data;


    } catch (error) {
        console.error(error)
    }  
}

const getValue = (boton) =>{

    var input_sueldo = document.getElementById("input_sueldo").value;
    var input_ahorro = document.getElementById("input_ahorro").value;
    
    //var result = consultarApi(boton, input_sueldo, input_ahorro);
    
    
    document.getElementById("resultado").innerHTML = `input_sueldo: ${input_sueldo} input_ahorro: ${input_ahorro} boton: ${boton}`; 
}



 //http://localhost:8080/rest/msdxc/dxc?sueldo=4000&ahorro=5000
 //http://localhost:8080/rest/msdxc/saldo?sueldo=4000&ahorro=5000
 //http://localhost:8080/rest/msdxc/impuesto?sueldo=4000&ahorro=5000