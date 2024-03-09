const https = require("https");
const fs = require("fs");
const { exec } = require("child_process");

// Create the options for the https server
const options = {
  key: fs.readFileSync("server.key"), // The path to the private key file
  cert: fs.readFileSync("server.crt"), // The path to the certificate file
};

// Create the https server
const server = https.createServer(options, (req, res) => {
  const cmds = ["/up", "/down", "/switch"];
  const isValid = cmds.some((v) => v === req.url);

  if (req.method === "GET" && isValid === true) {
    // Write a response header
    res.writeHead(200);
    // Write a response body
    res.write("Hello, there.\n");
    // Execute a shell script on the server
    const ret = executeCommand(req.url.substring(1), res);
  } else {
    res.writeHead(404);
    res.end("not available.");
  }
});

server.listen(1443);

const executeCommand = (cmd, res) => {
  const cmds = {
    up: "up",
    down: "down",
    switch: "switch",
  };
  const scriptPath = process.argv[2];
  const adminUser = process.argv[3];
  const command = cmds[cmd];

  if (scriptPath && command) {
    const toRun = `nsenter -t 1 -m -u -n -i sudo -u ${adminUser} bash ${scriptPath}/${command}`;
    const child = exec(`${toRun}`, (error, stdout, stderr) => {
      // Handle the possible errors
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      // Log the output of the script
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });

    child.stdout.on('data', (data) => {
      res.write(data);
    });

    child.stderr.on('data', (data) => {
      res.write(`stderr: ${data}`);
    });

    child.on('error', (err) => {
      res.end(`child process exited with code ${err.message}`);
    });

    child.on('close', (code) => {
      res.end(`child process exited with code ${code}`);
    });
  }
};

