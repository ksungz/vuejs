<template>
  <div>
    <input type="text" v-model="targetDateStr">
    <button type="button" @click="setDateList">채우기</button>
    <ol>
      <li v-for="item in dataList" :key="item.dateStr">
        {{ item.dateStr }}
      </li>
    </ol>
  </div>
</template>

<script>
import {
  parse,
  format,
  startOfMonth,
  lastDayOfMonth
} from 'date-fns'

export default {
  name: 'datepicker',
  data() {
    return {
      targetDateStr: '2019-04-03',
      dateStrList: []
    }
  },
  computed: {
    dataList () {
      return this.dateStrList.map(dateStr => {
        return {
          dateStr,
          date: parse(dateStr)
        }
      })
    }
  },
  methods: {
    setDateList () {
      this.dateStrList = []

      const targetDate = parse(this.targetDateStr)

      const firstDate = startOfMonth(targetDate)
      const lastDate = lastDayOfMonth(targetDate)

      const year = lastDate.getFullYear()
      const month = lastDate.getMonth() + 1
      const lastDay = lastDate.getDate()

      console.log(format(firstDate, 'YYYY-MM-DD'), format(lastDate, 'YYYY-MM-DD'))

      for (let i = 1;  i <= lastDay; i++) {
        this.dateStrList.push(`${year}-${month}-${i}`)
      }
      console.log(this.dateStrList)
    }
  }
}
</script>

<style>

</style>
