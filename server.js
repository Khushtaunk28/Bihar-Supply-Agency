const { exec } =require('child_process');

// Run the serve command to serve the dist directory
exec('npx serve -s dist', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
    return;
  }
  console.log(stdout);
});
