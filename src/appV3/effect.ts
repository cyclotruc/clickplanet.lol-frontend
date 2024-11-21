import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";


import {addDisplayObjects, setupScene} from "./scene.ts";
import {createPoints} from "./points.ts";
import {setupEventListeners} from "./events.ts";

type Uniforms = {
    zoom: THREE.IUniform,
    resolution: THREE.IUniform
    img: THREE.IUniform
    atlasRegion: THREE.IUniform
    textureSize: THREE.IUniform
}

export function effect() {
    const {scene, camera, renderer, cleanup} = setupScene();


    const texture = new THREE.TextureLoader().load('/static/countries/atlas.png');
    const uniforms: Uniforms = {
        zoom: {value: 1.0},
        resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
        img: {value: texture},
        atlasRegion: {value: new THREE.Vector4(6000, 1334, 1000, 667)}, // display only france for this test
        textureSize: {value: new THREE.Vector2(13000, 12288)} // TODO: retrieve the size from the texture itself
    };

    const {
        pickingPoints,
        displayPoints,
        size
    } = createPoints(uniforms);
    console.log(size, "points generated")

    setupEventListeners(renderer, camera, uniforms, pickingPoints, displayPoints);

    addDisplayObjects(scene, displayPoints)

    startAnimation(renderer, scene, camera, uniforms);

    return cleanup
}

function startAnimation(
    renderer: THREE.WebGLRenderer,
    scene: THREE.Scene,
    camera: THREE.OrthographicCamera,
    uniforms: Uniforms,
) {
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minZoom = 1;
    controls.maxZoom = 50;

    const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        updateUniforms(camera, uniforms);
    };

    animate();
}

function updateUniforms(camera: THREE.OrthographicCamera, uniforms: Uniforms) {
    uniforms.zoom.value = camera.zoom;
}