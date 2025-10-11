import path from 'node:path';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import depsExternal from 'rollup-plugin-node-externals';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import ts from 'typescript';

const loadCompilerOptions = (tsconfig: string) => {
  if (!tsconfig) return {};
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    './',
  );
  return options;
};

const compilerOptions = loadCompilerOptions('tsconfig.json');

const basePlugins = [
  vanillaExtractPlugin(),
  depsExternal(),
  typescriptPaths({ preserveExtensions: true }),
];

export default defineConfig([
  {
    input: 'src/index.ts',
    plugins: [...basePlugins, esbuild({ minify: true })],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',

        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, '.css.vanilla')}.js`;
        },

        assetFileNames({ names }) {
          const name = names[0] ?? 'unknown-asset';
          return name.replace(/^src\//, '').replaceAll('vanilla', 'chroma');
        },

        exports: 'named',
      },
    ],
  },
  {
    input: 'src/index.ts',
    plugins: [
      ...basePlugins,
      esbuild({ minify: false }),
      dts({
        compilerOptions: {
          ...compilerOptions,
          baseUrl: path.resolve(compilerOptions.baseUrl || '.'),
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          target: ts.ScriptTarget.ESNext,
        },
      }),
    ],
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
  },
]);
