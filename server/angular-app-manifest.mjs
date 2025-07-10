
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 120044, hash: 'e11bb42cfb5e70ed58cb83085d3414241b3ca0437d25c0d8d44149053751cd96', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17769, hash: 'b00b81ed33d34305ac7eed5e1edade654a25da0375ee1d04ab431e389f26c793', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 175447, hash: '796831a2770d2970027c3137c2c346af0515f78977c364af3a1499533ee4b091', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 168249, hash: '07e143ac4eac7bc0b71f431fe5dda02f7a70d398e47115af4720304680a5ad51', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 158318, hash: 'f3fc057eb75afa72b37f8998bf1af8b7aee9bc584d210b22ad8d9bed5765374f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 153467, hash: '22bb29ac0e386673de9959fd3ed8337e892b42a261905c58320ce527ccb9a617', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 177015, hash: '9f28390631481eb59f7c93e5e90e2eeb49315f099f8680feac0508c48132d9bf', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-UBOZ7EJ6.css': {size: 529168, hash: 'W/oA8+e7wEo', text: () => import('./assets-chunks/styles-UBOZ7EJ6_css.mjs').then(m => m.default)}
  },
};
