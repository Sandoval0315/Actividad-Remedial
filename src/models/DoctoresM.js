import { Schema, model } from "mongoose";

const docSchemas = new Schemas(
    {
        nombre: {
            type: String,
            require: true
        },
        especialdiad: {
            type: String,
            require: true
        },
        correo: {
            type: String,
            require: true 
    },
        contraseña: {
            type: String,
            minLength: 8,
            require: true
    }
}
)

export default model("doctores", docSchemas)