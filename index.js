const endpoints = require("./endpoints.json");
const https = require("https");

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let { statusCode } = res;
        res.setEncoding("utf8");
        let data = "";
        res.on("data", chunk => {
          data += chunk;
        });
        res.on("end", () => {
          if (statusCode != 200) {
            res.resume();
            reject(
              `Request failed. Status code ${statusCode} with reason: ${
                JSON.parse(data).respone
              }`
            );
          }
          resolve(JSON.parse(data));
        });
      })
      .on("error", err => {
        reject(`Error: ${err.message}`);
      });
  });
}

class BunClient {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.baseURL = `https://api.bunteam.xyz/v2`;
  }
  async fetch(endpoint) {
    const url = `${this.baseURL}${endpoint}&api_key=${this.API_KEY}`;
    try {
      return await get(url);
    } catch (err) {
      throw new Error(err);
    }
  }
  async meme() {
    return await this.fetch(endpoints.meme);
  }
  async girl() {
    return await this.fetch(endpoints.girl);
  }
  async boy() {
    return await this.fetch(endpoints.boy);
  }
  async dog() {
    return await this.fetch(endpoints.dog);
  }
  async cat() {
    return await this.fetch(endpoints.cat);
  }
  async hug() {
    return await this.fetch(endpoints.hug);
  }
  async smile() {
    return await this.fetch(endpoints.smile);
  }
  async baka() {
    return await this.fetch(endpoints.baka);
  }
  async bite() {
    return await this.fetch(endpoints.bite);
  }
  async clap() {
    return await this.fetch(endpoints.clap);
  }
  async dance() {
    return await this.fetch(endpoints.dance);
  }
  async die() {
    return await this.fetch(endpoints.die);
  }
  async kill() {
    return await this.fetch(endpoints.kill);
  }
  async kiss() {
    return await this.fetch(endpoints.kiss);
  }
  async wag() {
    return await this.fetch(endpoints.wag);
  }
  async poke() {
    return await this.fetch(endpoints.poke);
  }
  async punch() {
    return await this.fetch(endpoints.punch);
  }
  async sad() {
    return await this.fetch(endpoints.sad);
  }
  async run() {
    return await this.fetch(endpoints.run);
  }
  async shot() {
    return await this.fetch(endpoints.shot);
  }
  async randomvid() {
    return await this.fetch(endpoints.randomvid);
  }
  async sgirl() {
    return await this.fetch(endpoints.sgirl);
  }
  async animewallpaper() {
    return await this.fetch(endpoints.animewallpaper);
  }
}
module.exports = BunClient;
