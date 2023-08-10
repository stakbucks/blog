import fs from "fs";

export interface Intro {
  name: string;
  img: string;
  intro: string;
}

export function getIntro(): Promise<Intro> {
  const jsonFile = fs.readFileSync("./data/intro.json", "utf-8");
  const jsonData = JSON.parse(jsonFile);
  console.log(jsonData);
  return jsonData[0];
}
