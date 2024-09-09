import mongoose from "mongoose";


let cached = (global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase = async () => {
  if (cached.conn ) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(process.env.MONGODB_URI!).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
