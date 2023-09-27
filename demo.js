const { remote } = require("webdriverio");
 
const main = async () => {
  const driver = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  await driver.url("https://webdriver.io/docs/gettingstarted/");
  await driver.pause(3000);
  await driver.deleteSession();
};
main();
