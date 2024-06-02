export function getTextContent(parent: HTMLElement): string {
  const walker = document.createTreeWalker(parent, NodeFilter.SHOW_TEXT, null);
  let text = "";
  let node: Node | null;
  while ((node = walker.nextNode())) {
    text += node.nodeValue;
  }
  return text;
}
