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

  //   after(async () => {
  //     await driver.deleteSession();
  //   });

  //   afterEach(async () => {
  //     await driver.pause(2000);
  //   });

  describe("percobaan login tanpa memasukkan inputan", async () => {
    it("valid ", async () => {
      const driver = await remote(option);
      await driver.$("~Login").click();
      await driver.$("~button-LOGIN").click();
      const teks = await driver
        .$(
          '//*[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[3]'
        )
        .getText();
      expect(teks).include("When the device");
    });
  });

  describe("percobaan login hanya memasukkan username", () => {
    it("valid ", async () => {
      const driver = await remote(option);
      await driver.$("~Login").click();
      await driver.$("~input-email").setValue("trunolele@gmail.com");
      await driver.$("~button-LOGIN").click();
      const teks = await driver
        .$(
          '//*[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]'
        )
        .getText();
      expect(teks).include("8 character");
      await driver.pause(2000);
    });
  });
  describe("percobaan login hanya memasukkan password", () => {
    it("valid ", async () => {
      const driver = await remote(option);
      await driver.$("~Login").click();
      await driver.$("~input-password").setValue("12345678");
      await driver.$("~button-LOGIN").click();
      const teks = await driver
        .$(
          '//*[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]'
        )
        .getText();
      expect(teks).include("email address");
    });
  });
});
