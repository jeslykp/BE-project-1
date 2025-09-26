import mongoose from 'mongoose';


const caseSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
    status: { type: String, default: "open" },
    created_at: { type: Date, default: Date.now }
  });
   
  export default  mongoose.model("Case", caseSchema);