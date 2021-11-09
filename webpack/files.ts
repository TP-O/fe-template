import { readdirSync } from "fs";

const htmlFileNames: string[] = [];
const entryPoints: { [key: string]: string } = {};

const srcFolder = readdirSync("./src");

srcFolder.forEach((file) => {
  if (file.endsWith(".html")) {
    const name = file.split(".html")[0];

    htmlFileNames.push(name);
    entryPoints[name] = `./src/ts/${name}/main.ts`;
  }
});

export { htmlFileNames, entryPoints };
