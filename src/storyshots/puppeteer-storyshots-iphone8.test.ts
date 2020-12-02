import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { devices } from 'puppeteer'

const customizePage = (page) => page.emulate(devices['iPhone 8'])

initStoryshots({
  suite: 'Image storyshots: iPhone 8',
  test: imageSnapshot({ customizePage }),
})
