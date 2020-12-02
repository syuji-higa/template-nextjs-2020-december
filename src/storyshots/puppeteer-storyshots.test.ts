import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

const getMatchOptions = () => {
  return { customSnapshotsDir: 'src/storyshots/__snapshots__' }
}

initStoryshots({
  suite: 'Image storyshots: PC',
  test: imageSnapshot({ getMatchOptions }),
})
