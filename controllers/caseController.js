import Case from "../models/Case.js";

export const createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.json(newCase);
  } catch (error) {
    res.status(500).json({ message: "Error creating case", error });
  }
};

export const updateCase = async (req, res) => {
  try {
    const updatedCase = await Case.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCase);
  } catch (error) {
    res.status(500).json({ message: "Error updating case", error });
  }
};
