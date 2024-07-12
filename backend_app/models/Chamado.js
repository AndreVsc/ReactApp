import mongoose from 'mongoose';

const chamadoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    data: {
        type: Date,
        default: Date.now,
    },
    status:{
        type: Boolean,
        default: false,
    },
    setor: {
        type: String,
        required: true,
    },
    ocorrencia: {
        type: String,
        required: true,
    },
    caso: {
        type: String,
        required: true,
    },
    casoEspecifico: {
        type: String,
    },
    classe: {
        prioridade: {
            type: String,
            required: true,
        },
        urgencia: {
            type: String,
            required: true,
        },
    },
    check: {
        type: Boolean,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('Chamado', chamadoSchema);
