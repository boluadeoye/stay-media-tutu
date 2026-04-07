const BASE_URL = "https://stylized-tarantula-5aec0f.instawp.site/wp-json/wp/v2";

export async function getPageData(id: number) {
  try {
    const res = await fetch(`${BASE_URL}/pages/${id}?_embed`, { next: { revalidate: 10 } });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error("WP API Error (Page):", error);
    return null;
  }
}

export async function getCollection(type: string) {
  try {
    const res = await fetch(`${BASE_URL}/${type}?_embed`, { next: { revalidate: 10 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error(`WP API Error (${type}):`, error);
    return [];
  }
}
