async function FetchLangSwitchMenu(id: string, path: string) {
  const container = document.getElementById(id);

  if (container) {
    const res = await fetch(path);
    const html = await res.text();
    container.innerHTML = html;
  }
}

FetchLangSwitchMenu("LangSwitchMenu", "../../../../components/features/start/lang-switch-menu/src/index.html")