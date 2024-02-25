import mongoose from 'mongoose';

export default defineNitroPlugin(() => {
  mongoose.connect(`${useRuntimeConfig().MONGO_URL}`);
  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

  mongoose.connection.once('open', function () {
    console.log('Connected to MongoDB');
  });

  return {
    name: 'database',
    version: '1.0.0',
  };
});
