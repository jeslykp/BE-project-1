import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact_info: { type: String, required: true },
  status: { type: String, default: "active" }
});

export default mongoose.model("Customer", customerSchema);