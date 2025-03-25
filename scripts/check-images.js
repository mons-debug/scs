const fs = require('fs');
const path = require('path');

const requiredImages = [
  'about-bg.jpg',
  'about-story.jpg',
  'services-bg.jpg',
  'services/disinfection.jpg',
  'services/rodent.jpg',
  'services/insect.jpg',
  'services/reptile.jpg',
  'team/director.jpg',
  'team/technical.jpg',
  'team/operations.jpg'
];

const publicDir = path.join(process.cwd(), 'public');

console.log('Checking for required images...\n');

const missingImages = requiredImages.filter(img => {
  const exists = fs.existsSync(path.join(publicDir, img));
  console.log(`${img}: ${exists ? '✅' : '❌'}`);
  return !exists;
});

if (missingImages.length > 0) {
  console.log('\nMissing images:');
  missingImages.forEach(img => console.log(`- ${img}`));
  console.log('\nPlease add these images to the public directory.');
} else {
  console.log('\nAll required images are present! ✨');
} 