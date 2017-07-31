const ObservableStore = require('obs-store')
const clone = require('clone')
const ConfigManager = require('../../metamask-controller/src/lib/config-manager')
const firstTimeState = require('../../metamask-controller/src/first-time-state')

module.exports = function () {
  const store = new ObservableStore(clone(firstTimeState))
  return new ConfigManager({ store })
}
