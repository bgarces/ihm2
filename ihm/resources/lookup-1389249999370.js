(function(window, undefined) {
  var dictionary = {
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "65094e03-e8bc-4b75-ab4b-c6a78317c79e": "pantalla_respuesta",
    "aaacdd86-88ac-4e09-b900-c2c72b96f08b": "pantalla_teclado",
    "5fa88908-9eec-454f-a899-14fca80f6533": "pantalla4",
    "69d8ca7c-de81-4f33-ba63-66765d257457": "pantalla3",
    "10ae9f0c-0539-495a-8b99-acf895538c72": "pantalla2",
    "b2cc59f1-a678-434b-ab2d-cc4297dbd202": "pantalla_procedimiento",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);