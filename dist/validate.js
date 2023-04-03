

const validateTelefono = ( cad)  =>{
let response = (cad.length >=10) ?true : false;
return response;


}



class validate {

    const validNames(values) {
        const nombreRX = (/^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;)
        const respuesta = value.match(nombreRX);
        return resp;
    }

    const validMail(value) {

        const mailRX = /^([\w.]+[^#$%&\/()='"!?¡]\w*-*)([@])(\w)+(\.[a-z]{2,3})$/g;
        const resp = value.match(mailRX);
        return resp;

    }
    const validform = (objeto) => {
        const valores = Object.values(objeto);
        let resp = valores.findIndex(e => e === false);// si no encuentra un false devuelve -1
        return resp;


    }

}
export { validateString, validateTelefono, validate }