// 这里编写自定义js脚本；将被静态引入到页面中
<script>
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://v1.jinrishici.com/all.json');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var data = JSON.parse(xhr.responseText);
      var gushici = document.getElementById('gushici');
      gushici.innerText = data.content;
    }
  };
  xhr.send();
</script>
