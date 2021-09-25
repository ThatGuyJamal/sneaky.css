const GitHub = require("gh-pages");

let site = "https://github.com/ThatGuyJamal/sneaky.css";

/**
 * A simple function to deploy the static site to github pages
 */
async function deploy() {
  await GitHub.publish("./static", {
    branch: "website",
    repo: site,
    message: "Sneaky.css has been updated!",
  });
  await console.log(
    `The Website has been pushed to github! View it live here: https://thatguyjamal.github.io/sneaky.css/`
  );
}

deploy();
