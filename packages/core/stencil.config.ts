import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'legrandav-components',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'components',
      customElementsExportBehavior: 'single-export-module',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'components/assets',
          warn: true,
        },
      ],
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@legrandav-components/core',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
    vueOutputTarget({
      componentCorePackage: '@legrandav-components/core',
      proxiesFile: '../vue/lib/components.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
  ],
  testing: {
    browserHeadless: 'new',
  },
};
