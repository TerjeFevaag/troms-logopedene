import sanitizeHtml from "sanitize-html";

export function cleanHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: ["h2", "h3", "p", "br", "strong", "em", "b", "i", "u", "ul", "ol", "li", "blockquote", "a", "img", "hr"],
    allowedAttributes: { a: ["href", "target", "rel"], img: ["src", "alt", "width", "height"] },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: { img: ["https"] },
    transformTags: {
      a: (_tag, attribs) => ({
        tagName: "a",
        attribs: { ...attribs, rel: "noopener noreferrer" },
      }),
    },
  });
}
