let inIframe;
try {
  inIframe = window.self !== window.top;
} catch (e) {
  inIframe = true;
}
const educationalSites = [
  "https://drakerecitalpraised.com/rpcghdc1?key=467d3e6001045bfb8860f44a30d2d18c",
];

function ABCloak(redirectToEducationalSite) {
  try {
    if (!inIframe) {
      const popup = open("about:blank", "_blank");
      if (popup) {
        const doc = popup.document;
        const iframe = doc.createElement("iframe");
        const style = iframe.style;
        const link = doc.createElement("link");
        const savedFavicon = localStorage.getItem(
          "faviconInputValue" || "https://ssl.gstatic.com/classroom/favicon.png"
        );
        const savedTitle =
          localStorage.getItem("tabInputValue") || "Google Classroom"; // Default if empty

        var name = savedTitle;
        var icon = savedFavicon;
        if (localStorage.getItem("cloakTitle") !== null) {
          name = localStorage.getItem("cloakTitle");
          icon = localStorage.getItem("cloakIcon");
        }
        doc.title = name;
        link.rel = "icon";
        link.href = icon;

        iframe.src = location.href;
        style.border = style.outline = "none";
        style.width = style.height = "100%";
        style.overflow = "hidden";
        doc.body.style.margin = style.margin = 0;
        style.padding = 0;
        doc.head.appendChild(link);
        doc.body.appendChild(iframe);
        doc.URLBeforeCloak = location.href;

        var script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML =
          `
          window.onmessage = function (e) {
            if (e.data == 'cancelABCloak') {
              location.replace("` +
          location.href +
          `");
            } else {
              try {
                var msg = JSON.parse(e.data);
                if (msg.msg === "changeCloak") {
                  document.title = msg.title
                  let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                  link.type = 'image/x-icon';
                  link.rel = 'shortcut icon';
                  link.href = msg.icon;
                  document.getElementsByTagName('head')[0].appendChild(link);
                }
              } catch { }
            }
          };`;
        doc.body.append(script);

        if (redirectToEducationalSite)
          location.replace(
            educationalSites[
              Math.floor(Math.random() * educationalSites.length)
            ]
          );
      }
    }
  } catch {
    ABCloak(true);
  }
}

if (localStorage.getItem("autoAB") == "true") {
  ABCloak(true);
}
function checkPopupsBlocked() {
  const testPopup = window.open("", "_blank");

  if (
    !testPopup ||
    testPopup.closed ||
    typeof testPopup.closed === "undefined"
  ) {
    alert("Popups needs to be enabled");
  } else {
    testPopup.close();
  }
}
function tabpresets(title, faviconURL) {
  // Change the website's title
  document.title = title;

  // Change the favicon
  const link =
    document.querySelector("link[rel~='icon']") ||
    document.createElement("link");
  link.rel = "icon";
  link.href = faviconURL; // Use the parameter directly
  document.head.appendChild(link);

  // Store values in localStorage
  localStorage.setItem("tabInputValue", title);
  localStorage.setItem("faviconInputValue", faviconURL);
}
// Function to update favicon and store it in localStorage
function updateFaviconFromInput() {
  const input = document.getElementById("favicon");
  if (input) {
    const faviconUrl = input.value.trim();
    if (faviconUrl) {
      const link =
        document.querySelector("link[rel~='icon']") ||
        document.createElement("link");
      link.rel = "icon";
      link.href = faviconUrl;
      document.head.appendChild(link);

      // Store value in localStorage
      localStorage.setItem("faviconInputValue", faviconUrl);
    }
  }
}

// Function to update tab title and store it in localStorage
function updateTitleFromInput() {
  const input = document.getElementById("tabname");
  if (input) {
    const newTitle = input.value.trim() || "GalaxyV4"; // Default to GalaxyV4 if empty
    document.title = newTitle;

    // Store value in localStorage
    localStorage.setItem("tabInputValue", newTitle);
  }
}

// Load saved values on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedFavicon = localStorage.getItem("faviconInputValue");
  const savedTitle = localStorage.getItem("tabInputValue") || "GalaxyV4"; // Default if empty

  if (savedFavicon) {
    const link =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.rel = "icon";
    link.href = savedFavicon;
    document.head.appendChild(link);
  }

  if (savedTitle) {
    document.title = savedTitle;
  }
});

// Attach event listeners
document
  .getElementById("favicon")
  ?.addEventListener("input", updateFaviconFromInput);
document
  .getElementById("tabname")
  ?.addEventListener("input", updateTitleFromInput);

function checkBrowser() {
  if (navigator.userAgent.toLowerCase().includes("firefox")) {
    document.querySelector(".gradient-container").style.display = "none";
  }
}
checkBrowser()
function launchBlob() {
  const currentSiteUrl = window.location.href + "?redirect=true";

  const htmlContent = `
    <html>
      <head>
        <title>Space</title>
        <style>
          body,
          html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
          iframe {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe src="${currentSiteUrl}"></iframe>
      </body>
    </html>
	`;

  const blob = new Blob([htmlContent], {
    type: "text/html",
  });

  const blobUrl = URL.createObjectURL(blob);

  let newWindow = window.open(blobUrl);
  if (newWindow) {
    newWindow.onload = () => {
      newWindow.document.title = "Galaxy";
    };
  }
}
