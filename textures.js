
var scene = new THREE.Scene();
scene.background = new THREE.Color('blue');

var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//  TEXTURE
var texture1 = new THREE.ImageUtils.loadTexture('./img/orange.jpg');
texture1.wrapS = THREE.RepeatWrapping;
texture1.wrapT = THREE.RepeatWrapping;
texture1.offset.set( 0, 0 );
texture1.repeat.set( 3, 2.5 );

var texture2 = new THREE.ImageUtils.loadTexture('./img/exp.jpg');
texture2.wrapS = THREE.RepeatWrapping;
texture2.wrapT = THREE.RepeatWrapping;

var texture3 = new THREE.ImageUtils.loadTexture('./img/marble.jpeg');
texture3.wrapS = THREE.RepeatWrapping;
texture3.wrapT = THREE.RepeatWrapping;

//  Use python -m http.server for the texture to load


var material1 = new THREE.MeshPhongMaterial({map: texture1});
var material2 = new THREE.MeshPhongMaterial({map: texture2});
var material3 = new THREE.MeshPhongMaterial({map: texture3});

var geometry1 = new THREE.BoxGeometry(3, 1, 1);
var cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.set(-5, 0, -2);
scene.add(cube1);

var geometry2 = new THREE.BoxGeometry(2, 2, 1);
var cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.set(5, 0, -2);
scene.add(cube2);

var geometry3 = new THREE.BoxGeometry(1, 3, 2);
var cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(0, 0, 20);
scene.add(cube3);

var sphereGeometry = new THREE.SphereGeometry(3, 30, 30);
var sphere = new THREE.Mesh(sphereGeometry, material1);
sphere.position.set(0, 0, -5)
scene.add(sphere);


cube1Rotation = true;
cube2Rotation = true;
cube3Rotation = true;

document.onclick = function(e){
    cube1Rotation = !cube1Rotation;
    cube2Rotation = !cube2Rotation;
    cube3Rotation = !cube3Rotation;
};


//  LIGHTING

//  Point Light
var light = new THREE.PointLight(0xefefff, 1, 100);
light.position.set(0, 0, 5).normalize();
scene.add(light);



camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    if (cube1Rotation) {
        cube1.rotation.x += 0.01;
        cube1.rotation.y += 0.01;
    }
    if (cube2Rotation) {
        cube2.rotation.x -= 0.01;
        cube2.rotation.y += 0.01;
    }
    if (cube3Rotation) {
        cube3.rotation.x += 0.01;
        cube3.rotation.y -= 0.01;
    }
    // sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();