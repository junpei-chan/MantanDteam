export async function FetchComponent(
  containerId: string,
  htmlPath: string,
  targetElementId: string
) {
  const container = document.getElementById(containerId);
  const res = await fetch(htmlPath);
  const html = await res.text();

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const targetElement = tempDiv.querySelector(`#${targetElementId}`);
  if (targetElement && container) {
    container.innerHTML = targetElement.outerHTML;
  }

  const tempDoc = document.implementation.createHTMLDocument();
  tempDoc.documentElement.innerHTML = html;
  const links = tempDoc.head.querySelectorAll('link[rel="stylesheet"]');
  links.forEach(link => {
    const linkElement = link as HTMLLinkElement;
    if (!document.querySelector(`link[href="${linkElement.href}"]`)) {
      const newLink = document.createElement("link");
      newLink.rel = "stylesheet";
      newLink.href = linkElement.href;
      document.head.appendChild(newLink);
    }
  });

  const scripts = tempDoc.head.querySelectorAll('script[src]');
  scripts.forEach(script => {
    const scriptElement = script as HTMLScriptElement;
    if (!document.querySelector(`script[src="${scriptElement.src}"]`)) {
      const newScript = document.createElement("script");
      newScript.src = scriptElement.src;
      newScript.defer = scriptElement.defer;
      document.body.appendChild(newScript);
    }
  });
}
