
var scene = new THREE.Scene();
scene.background = new THREE.Color('blue');

var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

var geometry1 = new THREE.BoxGeometry(3, 1, 1);
var material = new THREE.MeshPhongMaterial({ color: 'red', transparent: true, opacity: 1 });

var cube1 = new THREE.Mesh(geometry1, material);
cube1.position.set(-5, 0, -2);
scene.add(cube1);
var geometry2 = new THREE.BoxGeometry(2, 2, 1);
var cube2 = new THREE.Mesh(geometry2, material);
cube2.position.set(5, 0, -2);
scene.add(cube2);

var geometry3 = new THREE.BoxGeometry(1, 3, 2);
var cube3 = new THREE.Mesh(geometry3, material);
cube3.position.set(0, 0, -2);
scene.add(cube3);

cube1Rotation = false;
cube2Rotation = false;
cube3Rotation = false;

document.onclick = function(e){
    cube1Rotation = !cube1Rotation;
    cube2Rotation = !cube2Rotation;
    cube3Rotation = !cube3Rotation;
};

let xPos = 0;
let yPos = 0;
document.onmousemove = function(e) {
    xPos = (e.clientX * 10 / window.innerWidth) - 5;
    yPos = (e.clientY * 10 / window.innerHeight) - 5;
}


//  LIGHTING

//  Point Light
// var light = new THREE.PointLight(0xefefff, 1, 100);
// light.position.set(0, 0, 5).normalize();
// scene.add(light);

//  Directional light
// var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
// directionalLight.position.set(0, 0, 6)
// scene.add( directionalLight );

//  Spot light
var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 0, -2, 5 );
scene.add(spotLight);

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
    // light.position.set(xPos, yPos, 5);

    renderer.render(scene, camera);
}
animate();