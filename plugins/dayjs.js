import 'dayjs/locale/ja'
import dayjs from 'dayjs'

dayjs.locale('js')

export default ({app}, inject) => {
  inject('dayjs', string => dayjs(string));
}
