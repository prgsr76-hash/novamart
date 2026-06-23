import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';

dotenv.config();

const products = [
  {
    name: 'Wireless Headphones',
    price: 49.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150',
    category: 'Electronics',
    countInStock: 15,
  },
  {
    name: 'Smart Watch',
    price: 89.99,
    description: 'Fitness tracker with heart rate monitor and GPS',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150',
    category: 'Electronics',
    countInStock: 10,
  },
  {
    name: 'Backpack',
    price: 34.99,
    description: 'Waterproof backpack with laptop compartment',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150',
    category: 'Fashion',
    countInStock: 20,
  },
  {
    name: 'Coffee Mug',
    price: 12.99,
    description: 'Ceramic coffee mug with unique design',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=150',
    category: 'Home & Kitchen',
    countInStock: 30,
  },
  {
    name: 'Sunglasses',
    price: 24.99,
    description: 'Polarized sunglasses with UV protection',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=150',
    category: 'Fashion',
    countInStock: 12,
  },
  {
    name: 'Laptop Backpack',
    price: 49.99,
    description: 'Durable laptop backpack with USB charging port',
    image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=150',
    category: 'Fashion',
    countInStock: 8,
  },
  {
    name: 'Bluetooth Speaker',
    price: 39.99,
    description: 'Portable Bluetooth speaker with 12-hour battery life',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150',
    category: 'Electronics',
    countInStock: 18,
  },
  {
    name: 'Desk Lamp',
    price: 22.99,
    description: 'LED desk lamp with adjustable brightness',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150',
    category: 'Home & Kitchen',
    countInStock: 14,
  },
];

const importData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Products imported successfully!');
    process.exit();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

importData();