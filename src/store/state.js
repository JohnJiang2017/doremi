import cats from '@/data/cats'
import dogs from '@/data/dogs'
import notes from '@/data/notes'

function CreateSoundHelper () {
  this.audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  this.oscillator = this.audioCtx.createOscillator()
  this.gainNode = this.audioCtx.createGain()
  this.oscillator.connect(this.gainNode)
  this.oscillator.frequency.value = 440
  this.hasStarted = false
  this.playSound2 = (frequency, duration) => {
    if (!this.hasStarted) {
      this.hasStarted = true
      this.oscillator.start()
    }
    this.oscillator.frequency.value = frequency
    this.gainNode.connect(this.audioCtx.destination)
    setTimeout(() => this.gainNode.disconnect(this.audioCtx.destination), duration)
  }
}

CreateSoundHelper.prototype.playSound = function (frequency, duration) {
  if (!this.hasStarted) {
    this.hasStarted = true
    this.oscillator.start()
  }
  this.oscillator.frequency.value = frequency
  this.gainNode.connect(this.audioCtx.destination)
  setTimeout(() => this.gainNode.disconnect(this.audioCtx.destination), duration)
}

var soundHelper = new CreateSoundHelper()

export default {
  cats,
  dogs,
  pets: [...cats, ...dogs],
  notes,
  soundHelper
}
