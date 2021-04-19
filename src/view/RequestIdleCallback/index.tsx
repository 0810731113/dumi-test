import React, { useEffect } from 'react';

type MsgType = string;
function hello(msg: MsgType) {
  alert(msg);
}

window.requestIdleCallback =
  window.requestIdleCallback ||
  function(handler) {
    let startTime = Date.now();

    return setTimeout(function() {
      handler({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50.0 - (Date.now() - startTime));
        },
      });
    }, 1);
  };

const requestIdleCallbackDemo = () => {
  let taskList = [];
  let totalTaskCount = 0;
  let currentTaskNumber = 0;
  let taskHandle = null;

  let totalTaskCountElem = document.getElementById('totalTaskCount');
  let currentTaskNumberElem = document.getElementById('currentTaskNumber');
  let progressBarElem = document.getElementById('progress');
  let startButtonElem = document.getElementById('startButton');
  let logElem = document.getElementById('log');

  let logFragment = null;
  let statusRefreshScheduled = false;

  function logTaskHandler(data) {
    log('<strong>Running task #' + currentTaskNumber + '</strong>');

    for (let i = 0; i < data.count; i += 1) {
      log((i + 1).toString() + '. ' + data.text);
    }
  }

  function log(text) {
    if (!logFragment) {
      logFragment = document.createDocumentFragment();
    }

    let el = document.createElement('div');
    el.innerHTML = text;
    logFragment.appendChild(el);
  }

  function runTaskQueue(deadline) {
    while (
      (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
      taskList.length
    ) {
      let task = taskList.shift();
      currentTaskNumber++;

      task.handler(task.data);
      scheduleStatusRefresh();
    }

    if (taskList.length) {
      taskHandle = window.requestIdleCallback(runTaskQueue, { timeout: 1000 });
    } else {
      taskHandle = 0;
    }
  }

  function updateDisplay() {
    let scrolledToEnd =
      logElem.scrollHeight - logElem.clientHeight <= logElem.scrollTop + 1;

    if (totalTaskCount) {
      if (progressBarElem.max != totalTaskCount) {
        totalTaskCountElem.textContent = totalTaskCount;
        progressBarElem.max = totalTaskCount;
      }

      if (progressBarElem.value != currentTaskNumber) {
        currentTaskNumberElem.textContent = currentTaskNumber;
        progressBarElem.value = currentTaskNumber;
      }
    }

    if (logFragment) {
      logElem.appendChild(logFragment);
      logFragment = null;
    }

    if (scrolledToEnd) {
      logElem.scrollTop = logElem.scrollHeight - logElem.clientHeight;
    }

    statusRefreshScheduled = false;
  }

  function scheduleStatusRefresh() {
    if (!statusRefreshScheduled) {
      requestAnimationFrame(updateDisplay);
      statusRefreshScheduled = true;
    }
  }

  function enqueueTask(taskHandler, taskData) {
    taskList.push({
      handler: taskHandler,
      data: taskData,
    });

    totalTaskCount++;

    if (!taskHandle) {
      taskHandle = window.requestIdleCallback(runTaskQueue, { timeout: 1000 });
    }

    scheduleStatusRefresh();
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

  function decodeTechnoStuff() {
    totalTaskCount = 0;
    currentTaskNumber = 0;
    updateDisplay();

    let n = getRandomIntInclusive(100, 200);

    for (let i = 0; i < n; i++) {
      let taskData = {
        count: getRandomIntInclusive(75, 150),
        text:
          'This text is from task number ' + (i + 1).toString() + ' of ' + n,
      };

      enqueueTask(logTaskHandler, taskData);
    }
  }

  document
    .getElementById('startButton')
    .addEventListener('click', decodeTechnoStuff, false);
};

export default () => {
  useEffect(() => {
    // const myroot = document.createElement('div');
    // myroot.setAttribute('id','myroot');
    // myroot.innerHTML = '23456678ss'
    // document.body.appendChild(myroot);
    requestIdleCallbackDemo();
  }, []);
  return (
    <div className={``} id="myroot">
      <p>
        演示使用{' '}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Background_Tasks_API">
          协作调度幕后任务{' '}
        </a>{' '}
        使用 <code>requestIdleCallback()</code>
        方法.
      </p>

      <div className="container">
        <div className="label">解码量子丝极谱发射中...</div>
        <progress id="progress" value="0"></progress>
        <div className="button" id="startButton">
          开始
        </div>
        <div className="label counter">
          任务 <span id="currentTaskNumber">0</span> /{' '}
          <span id="totalTaskCount">0</span>
        </div>
      </div>

      <div className="logBox">
        <div className="logHeader">记录</div>
        <div id="log"></div>
      </div>
    </div>
  );
};
