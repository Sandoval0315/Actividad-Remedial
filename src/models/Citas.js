import {Schemas, model} from "mongoose"

const CitasSchemas = new Schemas(
    {
        fecha: {
            type: Date, 
            require: true
        },
        hora: {
            type: Number,
            require: true
        },
        motivo: {
            type: String,
            require: true
        },
        DoctorAsignado: {
            type: Schema.Types.ObjectId,
            ref: "doctores",
            require: true
        },
        pacienteAsignado: {
            type: Schemas.Types.ObjectId,
            ref: "pacientes",
            require: true
        }
    }
)