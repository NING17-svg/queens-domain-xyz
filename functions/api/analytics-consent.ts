type VisitorRequest = Request & {
  cf?: { country?: string | null; isEUCountry?: string | null };
};

export function onRequestGet({ request }: { request: VisitorRequest }): Response {
  const country = request.cf?.country ?? '';
  // Cloudflare uses XX for unknown locations and T1 for Tor.
  const knownCountry = /^[A-Z]{2}$/.test(country) && country !== 'XX';
  const autoStart = knownCountry && request.cf?.isEUCountry !== '1';

  return Response.json({ autoStart }, { headers: { 'Cache-Control': 'private, no-store' } });
}
