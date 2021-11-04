'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["sw.js", "sw-toolbox.js", "index.html", "manifest.json", "logo.png"]);

toolbox.router.get('/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});
