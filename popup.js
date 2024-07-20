document.getElementById('redButton').addEventListener('click', function() {
    changeBackgroundColor('red');
});

document.getElementById('blueButton').addEventListener('click', function() {
    changeBackgroundColor('blue');
});

function changeBackgroundColor(color) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: (color) => {
                document.body.style.backgroundColor = color;
            },
            args: [color]
        });
    });
}
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function () {
            // アイコンを作成
            const icon = document.createElement('div');
            icon.style.width = '50px';
            icon.style.height = '50px';
            icon.style.position = 'fixed';
            icon.style.right = '10px';
            icon.style.bottom = '10px';
            icon.style.backgroundColor = 'green'; // アイコンのURLを指定
            icon.style.backgroundSize = 'cover';
            icon.style.zIndex = '10000'; // アイコンが他の要素の上に表示されるようにする
            
            // アイコンをクリックしたときの動作
            icon.addEventListener('click', () => {
                alert('アイコンがクリックされました');
            });
            
            // アイコンをページに追加
            document.body.appendChild(icon);
        }
    });
});