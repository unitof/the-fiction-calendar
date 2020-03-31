const {readdirSync} = require('fs')
const path = require('path')

const eventsDir = path.join(__dirname, '../content/events')
const eventFilenames = readdirSync(eventsDir)
                       .filter(filename => filename !== '.gitkeep')
                       // ignore .gitkeep file (it is allowed)

describe.each(eventFilenames)('event filenames', filename => {
  test('must have format `YYYY-MM-DD event-slug.yaml`', () => {
    expect(filename).toMatch(/^\d{4}-\d{2}-\d{2} ([a-z0-9]+-)*[a-z0-9]+\.yaml$/)
  })
})
