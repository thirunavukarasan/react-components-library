import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
// import cssbundle from 'rollup-plugin-css-bundle';
// import autoprefixer from 'autoprefixer'

export default [
    {
        input : './src/index.js',
        output : [
            {
                dir: "dist",
                format: "cjs",
                sourcemap: true,
                preserveModules: true
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
                minimize:true,
                extract: true,
                // modules: true
            }),
            external(),
            terser(),
            // cssbundle({
            //     transform: code => postcss([autoprefixer]).process(code, {})
            // })
        ]
    }
]