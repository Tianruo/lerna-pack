import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescriptCompiler from 'typescript'
import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify-es'
import json from '@rollup/plugin-json'
import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'

const config = {
    input: `src/index.ts`,
    output: [
        { file: pkg.main, format: 'umd', name: 'pack1', sourcemap: true },
        { file: pkg.module, format: 'es', sourcemap: true },
    ],
    watch: {
        include: 'src/**',
    },
    plugins: [
        json({}),

        typescript({ 
            typescript: typescriptCompiler, 
            // objectHashIgnoreUnknownHack: true 
        }),

        // 把commonjs转为es，因为rollup默认不支持module.exports这种
        commonjs({
            include: ['node_modules/**'],
            exclude: ['node_modules/process-es6/**'],
            namedExports: {
                'node_modules/protobufjs/index.js': ['Root', 'rpc', 'util', 'Message', 'Method'],
            },
        }),

        sourceMaps(),

        isProduction && uglify(),
    ],
}

export default config
