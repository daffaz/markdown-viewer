window.onload = () => {
  const converter = new showdown.Converter();
  const pad = document.getElementById("pad");
  const markdown = document.getElementById("markdown");

  let previousMarkdown;

  const convertTextAreaToMarkdown = () => {
    const md = pad.value;
    previousMarkdown = md;
    const html = converter.makeHtml(md);

    markdown.innerHTML = html;
  };

  const didChangeOccur = function () {
    if (previousMarkdown != pad.value) {
      return true;
    }
    return false;
  };

  setInterval(() => {
    if (didChangeOccur) {
      convertTextAreaToMarkdown();
    }
  }, 1000);

  pad.addEventListener("input", convertTextAreaToMarkdown);
  sharejs.open("home", "text", (_, doc) => {
    doc.attach_textarea(pad);
  });
};
