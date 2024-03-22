var camera, scene, renderer, ainicio, cods_ = '';
var geometry, material, mesh;


loadDoc("https://raw.githubusercontent.com/ljaureguil/My-Library/master/three.min.js", function(r) {

    insertScript(r)

    loadDoc("https://cdn.rawgit.com/chandlerprall/ThreeCSG/aefe3778/ThreeCSG.js", function(r2) {

        insertScript(r2)
        loadDoc("https://raw.githubusercontent.com/ljaureguil/My-Library/master/MyLib.js", function(r3) {
            insertScript(r3)

            loadDoc("https://raw.githubusercontent.com/ljaureguil/My-Library/master/TrackballControls.js", function(t) {

                insertScript(t)

                setTimeout(function() {
                  //  _init();
                }, 8);

            })
        })
    })

});
 //src="//cdn.rawgit.com/mrdoob/three.js/master/build/three.min.js" onload="init"

function _init(c) {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 100;

    scene = new THREE.Scene();
    if(c!=undefined){
        renderer = new THREE.WebGLRenderer({
            canvas: c,
            antialias: true,
            alpha: true
        });
    }
    else{
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //     renderer.domElement.setAttribute("id","_renderCanvas");
    document.body.appendChild(renderer.domElement);
}

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.35, 1000);

    directionalLight.position.y = 500;
    directionalLight.position.x = 400;
    directionalLight.position.z = 300;
    directionalLight.castShadow = true;
    directionalLight.target = scene;
    scene.add(directionalLight);

    var spotLight = new THREE.SpotLight(0xaaaaaa);
    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    spotLight.shadow.camera.fov = 300;
    bulbMat = new THREE.MeshStandardMaterial({
        emissive: 0xffffff,
        emissiveIntensity: 1,
        color: 0xff0000
    });

    var light = new THREE.AmbientLight(0xffffff, .65); // soft white light
    scene.add(light);
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    animate();

}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    controls.update();
    eval(cods_)
    renderer.render(scene, camera);
}

function loadDoc(url, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", url, false);
    xhttp.send();
    callback(xhttp.responseText);

}

function insertScript(script) {
    var head = document.head;

    var createScript = document.createElement('script');
    createScript.innerHTML = script;
    createScript.setAttribute('defer', '');

    head.appendChild(createScript);
}
