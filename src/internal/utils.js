/**
 * {
 *   0: 'sunday', ...
 *   sunday: 0, ...
 * }
 */
export const DAYS = (function () {
  const o = {}
  'sunday|monday|tuesday|wednesday|thursday|friday|saturday'
    .split('|')
    .forEach((name, idx) => {
      o[name] = idx
      o[idx] = name
    })
  return o
})()

export const isNil = (v) => v === null || v === undefined

/**
 * convert string to Date.
 * 2017        : year = 2017, month = 1, day = 1
 * '2017-07'   : year = 2017, month = 7, day = 1
 * '2017-07-03': year = 2017, month = 7, day = 3
 * @param {String} str
 * @param {Boolean} isUTC - return date in UTC
 * @return {Date}
 */
export function toDate (str, isUTC) {
  const m = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?.*$/.exec((str || '').toString())
  if (m) {
    m.shift()
    const [year, month, day] = m.map((num) => parseInt(num || 1, 10))
    if (isUTC) {
      return new Date(Date.UTC(year, month - 1, day))
    } else {
      return new Date(year, month - 1, day)
    }
  }
}
