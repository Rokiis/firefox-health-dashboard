/* eslint-disable */

import { Data } from '../vendor/datas';

const TESTS = [
  {
    id: 'cpu',
    label: 'CPU',
    filter: { in: { test: ['cpu', 'power-cpu'] } },
  },
  // {
  //   id: 'proportional',
  //   label: 'Proportional',
  //   filter: { eq: { test: 'proportional' } },
  // },
  {
    id: 'screen',
    label: 'Screen',
    filter: { in: { test: ['screen', 'power-screen'] } },
  },
  {
    id: 'wifi',
    label: 'Wifi',
    filter: { in: { test: ['wifi', 'power-wifi'] } },
  },
];
const PLATFORMS = [
  {
    id: 'g5',
    label: 'Moto G5 (arm7)',
    filter: {
      eq: {
        platform: 'android-hw-g5-7-0-arm7-api-16',
      },
    },
  },
  {
    id: 'p2',
    label: 'Pixel 2 (arm7)',
    filter: {
      eq: {
        platform: 'android-hw-p2-8-0-arm7-api-16',
      },
    },
  },
  {
    id: 'p2-aarch64',
    label: 'Pixel 2 (aarch64)',
    filter: {
      eq: {
        // options: 'opt',
        platform: 'android-hw-p2-8-0-android-aarch64',
      },
    },
  },
];
const COMBO_TABLE = {
  header: ['browser', 'browserLabel', 'suite', 'suiteLabel', 'filter'],
  data: [
    ['geckoview', 'Geckoview', 'scn-power-idle', 'about:blank page', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-scn-power-idle-geckoview-power']}}],
    // ['refbrow', 'Reference Browser', 'scn-power-idle', 'about:blank page', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-scn-power-idle-refbrow-power']}}],
    // ['fenix', 'Firefox Preview', 'scn-power-idle', 'about:blank page', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-scn-power-idle-fenix-power']}}],
    // ['fennec', 'Fennec', 'scn-power-idle', 'about:blank page', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-scn-power-idle-fennec-power']}}],

    ['geckoview', 'Geckoview', 'scn-power-idle-bg', 'idle background', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-scn-power-idle-bg-geckoview-power']}}],



    ['geckoview', 'Geckoview', 'speedometer', 'Speedometer', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-speedometer-geckoview-power']}}],
    // ['refbrow', 'Reference Browser', 'speedometer', 'Speedometer', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-speedometer-refbrow-power']}}],
    // ['fenix', 'Firefox Preview', 'speedometer', 'Speedometer', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-speedometer-fenix-power']}}],
    // ['fennec', 'Fennec', 'speedometer', 'Speedometer', {eq: {framework: 10, repo: 'mozilla-central', suite: ['raptor-speedometer-fennec-power']}}],

  ],
};
const COMBOS = COMBO_TABLE.data.map(row => Data.zip(COMBO_TABLE.header, row));

export { TESTS, COMBOS, PLATFORMS };
