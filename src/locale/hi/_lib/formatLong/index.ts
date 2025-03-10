import type { DateTimeFormat } from '../../../types'
import { FormatLong } from '../../../types'
import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index'

const dateFormats: DateTimeFormat = {
  full: 'EEEE, do MMMM, y', // CLDR #1787
  long: 'do MMMM, y', // CLDR #1788
  medium: 'd MMM, y', // CLDR #1789
  short: 'dd/MM/yyyy', // CLDR #1790
}

const timeFormats: DateTimeFormat = {
  full: 'h:mm:ss a zzzz', // CLDR #1791
  long: 'h:mm:ss a z', // CLDR #1792
  medium: 'h:mm:ss a', // CLDR #1793
  short: 'h:mm a', // CLDR #1794
}

const dateTimeFormats: DateTimeFormat = {
  full: "{{date}} 'को' {{time}}", // CLDR #1795
  long: "{{date}} 'को' {{time}}", // CLDR #1796
  medium: '{{date}}, {{time}}', // CLDR #1797
  short: '{{date}}, {{time}}', // CLDR #1798
}

const formatLong: FormatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: 'full',
  }),

  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: 'full',
  }),

  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
}

export default formatLong
