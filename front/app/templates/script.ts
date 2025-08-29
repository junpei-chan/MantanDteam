async function loadHead(path: string) {
  const response = await fetch(path);
  const html = await response.text();

  // HTML文字列を一時的にDOM化
  const temp = document.createElement("div");
  temp.innerHTML = html;

  // head に追加
  Array.from(temp.children).forEach(el => {
    document.head.appendChild(el);
  });
}

loadHead("/components/shared/head.html");