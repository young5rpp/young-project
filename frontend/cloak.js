function cloakAsGoogleDocs() {
  document.title = "Untitled document - Google Docs";
  const link = document.querySelector("link[rel~='icon']");
  if (link) {
    link.href = "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x32.png";
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = "https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x32.png";
    document.head.appendChild(newLink);
  }
}

