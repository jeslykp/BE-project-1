import Case from "../models/Case.js";

// Create a new case
export const createCase = async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.json(newCase);
  } catch (error) {
    res.status(500).json({ message: "Error creating case", error });
  }
};

// Update a case
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

// Get all cases
export const getCases = async (req, res) => {
  try {
    const cases = await Case.find()
      .populate("customer_id", "name contact_info") // populate customer info
      .populate("assigned_to", "username"); // populate assigned user
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cases", error });
  }
};

// Get cases for a specific customer
export const getCasesByCustomer = async (req, res) => {
  try {
    const cases = await Case.find({ customer_id: req.params.customerId })
      .populate("customer_id", "name contact_info")
      .populate("assigned_to", "username");
    res.json(cases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching customer cases", error });
  }
};

export const deleteCase = async (req, res) => {
  try {
    const deleted = await Case.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Case not found" });
    }
    res.json({ message: "Case deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting case", error: err.message });
  }
};