// const rewrite = [
//   {
//     source: "/api/:path*",
//     destination: "http://192.168.66.240:15577/api/:path*",
//   },
//   {
//     source: "/AElfIndexer_DApp/:path*",
//     destination: "http://192.168.67.172:8083/AElfIndexer_DApp/:path*",
//   },
// ];

// module.exports = rewrite;

const rewrite = [
  {
    source: "/api/:path*",
    destination: "https://did-portkey.portkey.finance/api/:path*",
  },
  {
    source: "/AElfIndexer_DApp/PortKeyIndexerCASchema/:path*",
    destination:
      "https://dapp-portkey.portkey.finance/Portkey_DID/PortKeyIndexerCASchema/:path*",
  },
];

module.exports = rewrite;
