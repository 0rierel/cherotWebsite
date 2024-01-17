import mongoose, { Document, Schema } from 'mongoose';
import validationError from "../customErrors/validationError";

interface ProductCreationInput {
  name: string;
  desc: string;
  comments: string;
  price: number;
  category: string;
  available: boolean;
}
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

const validateRequiredFields = (input: Partial<ProductCreationInput>): void => {
  const requiredFields: Array<keyof ProductCreationInput> = ['name', 'desc', 'price', 'category', 'available', 'comments'];

  for (const field of requiredFields) {
    if (input[field] === undefined || input[field] === null) {
      throw new validationError(`Missing required field: ${field}`, 'required');
    }
  }
};

const validateUnexpectedFields = (input: Partial<ProductCreationInput>): void => {
  const allowedFields: Array<keyof ProductCreationInput> = ['name', 'desc', 'price', 'category', 'available', 'comments'];

  for (const field in input) {
    if (!allowedFields.includes(field as keyof ProductCreationInput)) {
      throw new validationError(`Unexpected field: ${field}`,'unexpected');
    }
  }
};

const validateProductInput = (input: Partial<ProductCreationInput>): void => {
  validateRequiredFields(input);
  validateUnexpectedFields(input);
};

export { Product, ProductDoc ,validateProductInput, validateUnexpectedFields};
