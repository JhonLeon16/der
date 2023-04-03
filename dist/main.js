const validateString = (cad) => {
    let response = (cad.length >= 3) ? true : false;
    return response;
};

const validateTelefono = (cad) => {
    let response = (cad.length >= 10) ? true : false;
    return response;
}
//Instanciar el objeto validate


let validator = new Validate();

// objeto de validacion 
const Objectvalid = {
    NameObject: false,
    lastNameobject: false,
    mailObjetct: false,
    teleObject: true,
    msnObject: true,

}

Form.addEventListener('change', fuction(event))
const inputid = event.target.dispatchEvent;
console.log(inputid);
const inputValue = event.target.value;
console.log(inputValue)
const inputclass = event.target.classlist;
console.log(imputclass);

const validclass = () => {
    imputclass.add("is-valid");
    imputclass.remove("is-invalid");


}

const invalidclass = () => {
    imputclass.add("is-valid");
    imputclass.remove("is-invalid");
}


switch (inputid) {

    case "name":
        Objectvalid.nameObject = validator.validNames(inputValue);
        if (Objectvalid.nameObject) {
            validclass();
        }
        else {

            invalidclass();

        }

        console.log(object.values(Objectvalid));

}break;
case "lastName";
Objectvalid.lastNameobject = validator.validNames(inputValue);
Objectvalid.lastNameobject ? validclass() : invalidclass();
console.log(Object.values(Objectvalid));
break;
    case "mail";
Objectvalid.mailObjetct = validator.validNames(inputValue);
Objectvalid.mailObjetct ? validclass() : invalidclass();
console.log(Object.values(Objectvalid));
break;

export { validateString, validateTelefono }


import { addStudent } from "./paint.js";
import { validateString, validateTelefono } from "./validate.js"

btnEnviar = addEventListener('click', (e) =>
    e, preventDefault()
)

const nombre = document.getElementById("name").Value;
const apellido = document.getElementById("lastname").Value;
const correo = document.getElementById("mail").Value;
const telefono = document.getElementById("telephone").Value;
const mensaje = document.getElementById("fm_contact").Value;
if (validator.valiform(Objectvalid) === -1){

addStudent(nombre,)

}
if (validadString(nombre) && validateString(apellido) && validateString(correo) &&
    validateTelefono(telefono))
    console.log("enviando formulario:");

{

}