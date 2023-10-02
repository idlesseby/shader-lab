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

    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 6.0; i++) {
        vec2 uv = vUv * 2.0 - 1.0;

        uv = fract(uv * 1.5) - 0.5;

        float d = length(uv) * exp(-length(vUv));

        vec3 col = palette(length(vUv) + uTime);

        d = sin(d*8.0 + uTime)/8.0;
        d = abs(d);

        d = pow(0.01 / d, 1.5);

        finalColor += col * d;
    }

    gl_FragColor = vec4(finalColor, 1.0);
}