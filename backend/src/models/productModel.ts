import mongoose, { Document, Schema } from 'mongoose';

interface ProductDoc extends Document {
  name: string;
  desc: string;
  comments: string;
  price: number;
  category: string;
  available: boolean;
}

const productSchema = new Schema<ProductDoc>({
  name: String,
  desc: String,
  comments: String,
  price: Number,
  category: String,
  available: Boolean,
});

const Product = mongoose.model<ProductDoc>('Product', productSchema);
export { Product, ProductDoc};
