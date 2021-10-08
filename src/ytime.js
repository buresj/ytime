class YTimeStore {
  #watchTimeTotal
  #watchTimeToday
  #visitTimeTotal
  #visitTimeToday

  constructor() {
    const todayString = new Date().toLocaleDateString()

    this.#watchTimeTotal = this.#createStorageItem("wt_total", { count: 0 })
    this.#visitTimeTotal = this.#createStorageItem("vt_total", { count: 0 })
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

class YTime extends HTMLSpanElement {
  store
  clock
  showTime

  constructor() {
    super()
    this.store = new YTimeStore()
    this.attachShadow({ mode: "open" })
  }

  get videoWrapper() {
    return document.querySelector("#movie_player")
  }

  get videoPlayer() {
    return document.querySelector("#movie_player").querySelector("video")
  }

  connectedCallback() {
    const observerHandled = (playing) => this.#runClock.bind(this, playing)

    this.videoPlayer?.addEventListener("playing", () => observerHandled(true))
    this.videoPlayer?.addEventListener("pause", () => observerHandled(false))

    this.innerText = "text"
  }

  disconnectedCallback() {
    const observerHandled = (playing) => this.#runClock.bind(this, playing)

    this.videoPlayer?.removeEventListener("playing", () => observerHandled(true))
    this.videoPlayer?.removeEventListener("pause", () => observerHandled(false))
  }

  #runClock(playing) {
    if (!playing) {
      this.clock && clearInterval(this.clock)
      return
    }

    this.clock = setInterval(() => {
      if (this.videoWrapper.classList.contains("playing-mode")) {
        this.store.todayVisitTime += 1
        this.store.todayWatchTime += 1
        this.showTime = this.store.todayWatchTime
      }
    }, 1000)
  }
}

customElements.define("c-ytime", YTime, { extends: "span" })
const yTime = document.createElement("c-ytime", { is: "span" })
document.querySelector("#start").appendChild(yTime)
