export function checkTriangleSides(a, b, c) {
    if (Math.pow(a, 2) + Math.pow(b, 2) !== Math.pow(c, 2)) {
      throw new Error("Triangle is not rectangular");
    } else {
      console.log("Triangle is rectangle");
    }
  }