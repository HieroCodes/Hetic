// /app/api/posts/route.js
export async function GET() {
  const data = await fetch('https://data.cityofnewyork.us/resource/yjub-udmw.json');
  const posts = await data.json();
  
  return new Response(JSON.stringify(posts), {
    headers: { 'Content-Type': 'application/json' },
  });
}
