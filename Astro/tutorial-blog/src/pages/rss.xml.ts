import rss, {pagesGlobToRssItems} from "@astrojs/rss"
import type { APIContext } from "astro"

export async function GET(context: APIContext) {
    return rss({
        title: 'Alumno de astro | Blog',
        description: 'Blog de Alumno de astro',
        site: context.site ?? 'http://default-site-url.com',
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<lenguage>es</lenguage>`
    })
}