const CACHE='og-yl2bl9uj1c-v3';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(
  keys.filter(k=>k.startsWith('og-yl2bl9uj1c-')&&k!==CACHE).map(k=>caches.delete(k))
)).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=new URL(e.request.url);
  if(url.origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(async c=>{
    const hit=await c.match(e.request);
    if(hit)return hit;
    const res=await fetch(e.request);
    if(res.ok)c.put(e.request,res.clone());
    return res;
  }));
});