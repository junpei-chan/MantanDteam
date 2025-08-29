async function loadHead(path: string) {
  const response = await fetch(path);
  const html = await response.text();

  // HTML文字列を一時的にDOM化
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // head に追加（タグを問わず全て追加）
  Array.from(temp.childNodes).forEach(el => {
    if (el.nodeType === Node.ELEMENT_NODE) {
      document.head.appendChild(el);
    }
  });
}

loadHead("/components/shared/head.html");