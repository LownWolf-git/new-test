const mongoose = require('mongoose');
const Vlog = require('./models/Vlog');

mongoose.connect('mongodb://localhost:27017/vlogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const seedData = [
  {
    title: "First Vlog Ever",
    content: "This is my first vlog where I share my journey into vlogging!",
    author: "You",
    thumbnail: "/images/firstvlog.jpg"
  },
  {
    title: "A Day in My Life",
    content: "Come along as I show you what a typical day looks like for me.",
    author: "You",
    thumbnail: "/images/dayinlife.jpg"
  },
  {
    title: "Chill Night Routine",
    content: "How I wind down after a busy day of filming and editing.",
    author: "You",
    thumbnail: "/images/night.jpg"
  },
  {
    title: "Top Editing Tricks",
    content: "Sharing my favorite video editing tips and tricks that help my videos pop!",
    author: "You",
    thumbnail: "/images/editing.jpg"
  },
  {
    title: "Exploring the Mountains",
    content: "An adventure through the mountains and the beautiful views I captured.",
    author: "You",
    thumbnail: "/images/mountain.jpg"
  }
];

const seedVlogs = async () => {
  try {
    await Vlog.deleteMany({});              // Remove old vlogs
    await Vlog.insertMany(seedData);        // Insert fresh vlogs
    console.log("✅ Seed data inserted!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    mongoose.disconnect();
  }
};

seedVlogs();
