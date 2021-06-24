import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default [
    {
        input : './src/index.js',
        output : [
            {
                file: 'dist/index.js',
                format: 'cjs',
                sourcemap: true
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            babel({
                babelHelpers: 'bundled' ,
                exclude : 'node_modules/**',
                presets : ['@babel/preset-react'],
                // sourceType: 'unambiguous'
            }),
            commonjs({
                include: [
                   "./index.js", /node_modules\/prop-types/,/node_modules\/react/
                ]
            }),
            postcss({
                plugins:[],
                minimize:true
            }),
            external(),
            // terser()
        ]
    }
]