import ghpages from 'gh-pages';
import path from 'path';

ghpages.publish(path.join(__dirname, 'dist'), err => {
  if (err) {
    throw err;
  }
  console.log('The project has been published successfully.');
});
