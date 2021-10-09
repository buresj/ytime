class YTimeStore {
  #watchTimeToday
  #visitTimeToday

  constructor() {
    const todayString = new Date().toLocaleDateString()
    this.#watchTimeToday = this.#createStorageItem("wt_" + todayString, { count: 0 })
    this.#visitTimeToday = this.#createStorageItem("vt_" + todayString, { count: 0 })
  }

  get todayWatchTime() {
    return this.#watchTimeToday.count
  }

  set todayWatchTime(count) {
    this.#watchTimeToday.count = count
  }

  get todayVisitTime() {
    return this.#visitTimeToday.count
  }

  set todayVisitTime(count) {
    this.#visitTimeToday.count = count
  }

  #createStorageItem(key, initial) {
    const initialState = JSON.stringify(initial)

    return new Proxy(localStorage, {
      get: (target, prop) => {
        return JSON.parse(target.getItem(key) || initialState)[prop]
      },
      set: (target, prop, value) => {
        const previousState = JSON.parse(target.getItem(key) || initialState)
        target.setItem(key, JSON.stringify({ ...previousState, [prop]: value }))
        return true
      },
    })
  }
}

class Timer extends HTMLElement {
  store
  clock
  showTime

  constructor() {
    super()
  }

  get videoWrapper() {
    return document.querySelector("#movie_player")
  }

  get videoPlayer() {
    return document.querySelector("#movie_player")?.querySelector("video")
  }

  set watchTimeDisplay(time) {
    this.querySelector("#watchTime").innerText = this.formatSeconds(time)
  }

  set visitTimeDisplay(time) {
    this.querySelector("#visitTime").innerText = this.formatSeconds(time)
  }

  connectedCallback() {
    this.store = new YTimeStore()
    this.innerHTML = `<span id="watchTime"></span><i>|</i><span id="visitTime">/span>`

    this.visitTimeDisplay = this.store.todayVisitTime
    this.watchTimeDisplay = this.store.todayWatchTime

    this.style.color = "red"
    this.style.fontSize = "2rem"
    this.style.position = "absolute"
    this.style.left = "200px"

    this.querySelector("i").style.margin = "0 0.65rem"

    this.runClock()
  }

  runClock(e) {
    this.clock && clearInterval(this.clock)

    this.clock = setInterval(() => {
      if (this.videoWrapper.classList.contains("playing-mode")) {
        this.store.todayWatchTime += 1
      }

      this.store.todayVisitTime += 1
      this.visitTimeDisplay = this.store.todayVisitTime
      this.watchTimeDisplay = this.store.todayWatchTime
    }, 1000)
  }

  formatSeconds(sec) {
    var date = new Date(0)
    date.setSeconds(sec)
    return date.toISOString().substr(11, 8)
  }
}

customElements.define("c-timer", Timer)
const yTime = document.createElement("c-timer")
document.querySelector("#start").appendChild(yTime)
