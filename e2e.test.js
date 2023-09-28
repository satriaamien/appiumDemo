const { expect } = require("chai");

describe("posiitf case", async () => {
  const { remote } = require("webdriverio");
  const path = require("path");

  const option = {
    hostname: "0.0.0.0",
    port: 4723,
    logLevel: "debug",
    capabilities: {
      platformName: "Android",
      "appium:automationName": "UIAutomator2",
      "appium:deviceName": "emulator-5554",
      "appium:app": path.join(process.cwd(), "apk/dummy.apk"),
      "appium:appActivity": ".MainActivity",
    },
  };

  describe("percobaan login", async () => {
    it("valid ", async () => {
      const driver = await remote(option);
      await driver.$("~Login").click();
      await driver.$("~input-email").setValue("trunolele@gmail.com");
      await driver.$("~input-password").setValue("12345678");
      await driver.$("~button-LOGIN").click();
      const teks = await driver.$("id=android:id/button1").getText();
      expect(teks).include("OK");
      await driver.pause(2000);
      await driver.deleteSession();
    });
  });
});
