varying vec2 vUv;

uniform float uTime;

vec3 palette( float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.263, 0.416, 0.557);

    return a + b * cos( 6.28318 * ( c * t + d ) );
}

void main() {

    float d = length(vUv);

    vec3 col = palette(d + uTime);

    d = sin(d*8.0 + uTime)/8.0;
    d = abs(d);

    d = 0.02 / d;

    col *= d;

    gl_FragColor = vec4(col, 1.0);
}