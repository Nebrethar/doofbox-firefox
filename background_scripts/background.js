function openPage() {
  browser.tabs.create({
    url: "html/pcontent.html"
  });
}

browser.browserAction.onClicked.addListener(openPage);
