export type ArticleContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type ArticleContentPayload = {
  coverImage?: string;
  blocks: ArticleContentBlock[];
};

const isAbsoluteArticleImage = (value: string) => value.startsWith("/images/articles/");

export function parseArticleContent(rawContent: string): ArticleContentPayload {
  try {
    const parsed = JSON.parse(rawContent) as Partial<ArticleContentPayload>;

    if (!parsed || !Array.isArray(parsed.blocks)) {
      return { blocks: [{ type: "paragraph", text: rawContent }] };
    }

    const normalizedBlocks = parsed.blocks
      .map((block) => {
        if (!block || typeof block !== "object" || !("type" in block)) return null;

        if (block.type === "heading" && "text" in block && typeof block.text === "string") {
          const level = block.level === 3 ? 3 : 2;
          return { type: "heading", text: block.text, level } as ArticleContentBlock;
        }

        if (block.type === "paragraph" && "text" in block && typeof block.text === "string") {
          return { type: "paragraph", text: block.text } as ArticleContentBlock;
        }

        if (
          block.type === "list" &&
          "items" in block &&
          Array.isArray(block.items) &&
          block.items.every((item) => typeof item === "string")
        ) {
          return { type: "list", items: block.items } as ArticleContentBlock;
        }

        if (
          block.type === "image" &&
          "src" in block &&
          typeof block.src === "string" &&
          "alt" in block &&
          typeof block.alt === "string"
        ) {
          return {
            type: "image",
            src: isAbsoluteArticleImage(block.src) ? block.src : "/images/articles/placeholder.jpg",
            alt: block.alt,
            caption:
              "caption" in block && typeof block.caption === "string" ? block.caption : undefined,
          } as ArticleContentBlock;
        }

        return null;
      })
      .filter((block): block is ArticleContentBlock => block !== null);

    return {
      coverImage:
        typeof parsed.coverImage === "string" && isAbsoluteArticleImage(parsed.coverImage)
          ? parsed.coverImage
          : undefined,
      blocks:
        normalizedBlocks.length > 0
          ? normalizedBlocks
          : [{ type: "paragraph", text: rawContent }],
    };
  } catch {
    return { blocks: [{ type: "paragraph", text: rawContent }] };
  }
}

export function getArticleCoverImage(rawContent: string): string | undefined {
  const parsed = parseArticleContent(rawContent);
  if (parsed.coverImage) return parsed.coverImage;

  const firstImage = parsed.blocks.find((block) => block.type === "image");
  return firstImage?.type === "image" ? firstImage.src : undefined;
}
