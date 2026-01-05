export class Project {
  headline: string;
  info: string;
  image: string;
  ghlink: string;
  demolink: string;

  constructor(headline: string, info: string, image: string, ghlink: string, demolink: string) {
    this.headline = headline;
    this.info = info;
    this.image = image;
    this.ghlink = ghlink;
    this.demolink = demolink;
  }
}
