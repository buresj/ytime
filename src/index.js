class YTimeStore {
  #today

  constructor() {
    const todayString = new Date().toLocaleDateString()
    this.#today = this.#createStorageItem("ytime_" + todayString, { visitTime: 0, watchTime: 0, videos: [] })
  }

  get todayWatchTime() {
    return this.#today.watchTime
  }

  set todayWatchTime(count) {
    this.#today.watchTime = count
  }

  get todayVisitTime() {
    return this.#today.visitTime
  }

  set todayVisitTime(count) {
    this.#today.visitTime = count
  }

  get todayVideos() {
    return this.#today.videos
  }

  set todayVideos(video) {
    this.#today.videos = [...this.#today.videos, video]
  }

  get allWatchTimes() {
    return Object.entries(localStorage).map(([key, value]) => {
      if (key.includes("ytime")) {
        const data = JSON.parse(value)
        return data?.watchTime || 0
      }

      return 0
    })
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
  location
  isWindowActive

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

  set watchTimeDisplayColor(hsl) {
    this.querySelector("#watchTime").style.color = hsl
  }

  set visitTimeDisplay(time) {
    this.querySelector("#visitTime").innerText = this.formatSeconds(time)
  }

  set todaysVideosDisplay(count) {
    this.querySelector("#seenVideos").innerText = count
  }

  connectedCallback() {
    this.isWindowActive = true
    this.store = new YTimeStore()
    this.innerHTML = `<style>i {margin: 0 0.65rem} </style><span id="watchTime"></span><i>|</i><span id="visitTime"></span><i>|</i><span id="seenVideos"></span>`

    this.visitTimeDisplay = this.store.todayVisitTime
    this.watchTimeDisplay = this.store.todayWatchTime

    this.style.color = "white"
    this.style.fontSize = "2rem"
    this.style.position = "absolute"
    this.style.left = "200px"

    const handleVideoObserver = this.observeVideo.bind(this)
    document.addEventListener("yt-navigate-finish", handleVideoObserver)
    document.addEventListener("visibilitychange", () => (this.isWindowActive = !document.hidden))

    this.observeVideo()
    this.runClock()
  }

  runClock() {
    this.clock && clearInterval(this.clock)

    this.clock = setInterval(() => {
      if (this.videoWrapper?.classList.contains("playing-mode") && this.isWindowActive) {
        this.store.todayWatchTime += 1
      }

      this.store.todayVisitTime += 1

      this.render()
    }, 1000)
  }

  block() {
    const twoHours = 60 * 60 * 2
    if (this.store.todayWatchTime > twoHours) {
      const overlay = document.createElement("div")
      overlay.id = "overlay"

      const style = document.createElement("style")
      style.textContent = `#overlay {
      position: fixed;
      width: 100%; 
      height: 100%; 
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5); 
      z-index: 9999;
      cursor: pointer; 
      }`

      document.body.appendChild(style)
      document.body.appendChild(overlay)
    }
  }

  render() {
    this.visitTimeDisplay = this.store.todayVisitTime
    this.watchTimeDisplay = this.store.todayWatchTime
    this.watchTimeDisplayColor = this.computeHSLFromTime(this.store.todayWatchTime)
    this.todaysVideosDisplay = this.store.todayVideos.length || 0
  }

  formatSeconds(sec) {
    var date = new Date(0)
    date.setSeconds(sec)
    return date.toISOString().substr(11, 8)
  }

  observeVideo() {
    const url = new URL(window.location.href)
    const id = url.searchParams.get("v")
    this.block()

    if (id && !this.store.todayVideos.includes(id)) {
      this.store.todayVideos = id
    }
  }

  computeHSLFromTime(currentTime) {
    const l = this.store.allWatchTimes.slice(0, -1).filter((a) => a > 0).length
    const sum = this.store.allWatchTimes.reduce((p, c) => (p += c), 0)

    if (l <= 1 || sum <= 1 || !l || !sum) {
      return `hsl(0,0%,100%)`
    }

    const avg = Math.round(sum / l)
    const percent = (currentTime / avg) * 100
    const middle = 100
    const hue = percent < middle ? middle - percent : 360 - (percent - middle)

    return `hsla(${Math.round(hue)},100%,50%,1)`
  }
}

customElements.define("c-timer", Timer)
const yTime = document.createElement("c-timer")
document.querySelector("#start").appendChild(yTime)
