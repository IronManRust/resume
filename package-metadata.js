const fs = require("fs");

const metadata = {
    "version": process.env.npm_package_version,
    "timestamp": Date.now()
};

fs.writeFileSync("./dist/metadata.json", JSON.stringify(metadata));