!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("is-blob")):"function"==typeof define&&define.amd?define(["is-blob"],o):e.blobToBase64=o(e.isBlob)}(this,function(e){return e=e&&e.hasOwnProperty("default")?e.default:e,function(o,n){window.FileReader||n(new Error("no fileReader object available")),e(o)||n(new Error("provided argument is not blob"));var i=new window.FileReader;i.readAsDataURL(o),i.onloadend=function(){n(null,i.result)}}});
//# sourceMappingURL=blob-to-base64.umd.js.map