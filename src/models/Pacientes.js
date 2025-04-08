import { Schema, model } from "mongoose";

const pacienteSchemas = new Schemas(
    {
        nombre: {
            type: String,
            require: true
        },
        edad: {
            type: Number,
            require: true,
            minLength: 2
        },
        correo: {
            type: String,
            require: true 
    },
        contraseña: {
            type: String,
            minLength: 8,
            require: true
    },
    telefono: {
        type: String,
        match: /^\+?(\d{1,3})?(\d{9})$/, 
        required: false,
    },
    isVerified: {
        type: Boolean,
        require: true
    }
}
)

export default model("pacientes", pacienteSchemas)