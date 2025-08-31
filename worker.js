export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/getkey")) {
      const tunnelURL = "https://evaluate-girl-editorial-hosts.trycloudflare.com" + url.pathname;
      return fetch(tunnelURL, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
    }
    return new Response("Not Found", { status: 404 });
  },
};
