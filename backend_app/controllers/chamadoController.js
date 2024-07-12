import Chamado from '../models/Chamado.js';

export const getChamados = async (req, res) => {
    try {
        const documentos = await Chamado.find();
        res.status(200).send(documentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createChamado = async (req, res) => {
    const chamado = req.body;
    try {
        const newChamado = await Chamado.create(chamado);
        res.status(201).json(newChamado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateChamado = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedChamado = await Chamado.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedChamado) {
            return res.status(404).json({ message: 'Chamado não encontrado.' });
        }

        res.status(200).json(updatedChamado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
