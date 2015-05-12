chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 1320,
      'height': 870
    },
    'frame': 'none',
    'alwaysOnTop': true
  });
});
