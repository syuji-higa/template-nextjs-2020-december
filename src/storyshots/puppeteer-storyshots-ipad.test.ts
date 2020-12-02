import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import { devices } from 'puppeteer'

const customizePage = (page) => page.emulate(devices['iPad'])

initStoryshots({
  suite: 'Image storyshots: iPad',
  test: imageSnapshot({ customizePage }),
})
