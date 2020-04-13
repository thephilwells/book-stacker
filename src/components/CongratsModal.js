import React from 'react'

const recordTimeKey = 'book-stacker-record-time'
const recordTapsKey = 'book-stacker-record-taps'
let newTimeRecord = false
let newMovesRecord = false

export const CongratsModal = ({taps, time, victory, timeRecord, tapsRecord, newDay}) => {
  return (
    <div id="congrats-modal" className="modal">
      <div className="modal-content">
        <button id="close-congrats" className="close-x" onClick={() => closeModal()}>×</button>
        <h1>You Booked It!</h1>
        <hr />
        <p id="congrats-message">
          {victory && `You sorted the books in ${timeString(time)}`}<br />
          {victory && recordTimeString(time, timeRecord, newDay)}
          {newTimeRecord && 'You set a new daily record for time! 🏅'}<br />
          <br />
          {victory && `You sorted the books in ${taps} moves`}<br />
          {victory && recordTapsString(taps, tapsRecord, newDay)}
          {newMovesRecord && 'You set a new daily record for moves! 🏅'}<br />
        </p>
        <button id="congrats-reset-button" className="oblong-button" onClick={refreshPage}>Reset & Play Again></button>
        <hr />
        <p><a href="mailto:gameprototypes@nytimes.com?Subject=Books%20Feedback">Email Us »</a></p>
      </div>
    </div>
  )
}

function timeString(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;

  return mins.toString() + ':' + secs.toString().padStart(2, '0');
}

function recordTimeString(time, timeRecord, newDay) {
  if (timeRecord === null) {
    window.localStorage.setItem(recordTimeKey, time)
    newTimeRecord = true
    return `Your daily record for fastest time is ${timeString(time)}`
  } else if (timeRecord <= time && newDay === false && timeString(timeRecord) !== '0:00') {
    newTimeRecord = false
    return `Your daily record for fastest time is ${timeString(timeRecord)}`
  } else {
    const oldRecordString = `Your daily record for fastest time was ${timeString(timeRecord)}`
    window.localStorage.setItem(recordTimeKey, time)
    newTimeRecord = true
    return oldRecordString
  }
}

function recordTapsString(taps, tapsRecord, newDay) {
  if (tapsRecord === null) {
    window.localStorage.setItem(recordTapsKey, taps)
    newMovesRecord = true
    return `Your daily record for moves needed is ${taps}.`
  } else if (tapsRecord <= taps && newDay === false) {
    newMovesRecord = false
    return tapsRecord && `Your daily record for moves needed is ${tapsRecord}`
  } else {
    const oldRecordString = `Your daily record for fastest time was ${(tapsRecord)}`
    window.localStorage.setItem(recordTapsKey, taps)
    newMovesRecord = true
    return oldRecordString
  }
}

function closeModal(button) {
  if (document.querySelector('#congrats-modal')) {
    document.querySelector('#congrats-modal').style.display='none'
  }
    document.querySelector('main').classList.toggle('obscured')
}

function refreshPage() {
  window.location.reload()
}
