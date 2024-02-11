#define PI 3.1415926538

varying vec2 vUv;
uniform vec3 uFirstColor;
uniform vec3 uSecColor;
uniform float uProgress;

void main() {
    float colorProgress = smoothstep(uProgress-0.3, uProgress, vUv.y);
    vec3 color = mix(uFirstColor, uSecColor, colorProgress);
    gl_FragColor = vec4(color, 1.0);
}