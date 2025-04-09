import { Schema, model } from "mongoose";

const docSchemas = new Schema({
    nombre: {
        type: String,
        required: true
    },
    especialidad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true 
    },
    contraseña: {
        type: String,
        minLength: 8,
        required: true
    }
});

export default model("doctores", docSchemas);
