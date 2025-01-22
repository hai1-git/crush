import './App.css';
import Container from './Container';

function App() {
  // hàm di chuột sẽ tạo ra trái tim
  function getHeart(e) {
    // console.log(`toạ độ x : ${e.clientX}  toạ độ y : ${e.clientY}`);

    let ele = document.createElement('div');
    ele.className = 'element';
    document.querySelector('body').prepend(ele);
    ele.style.left = e.clientX + 'px';
    ele.style.top = e.clientY - 10 + 'px';
    setTimeout(() => {
      let text = document.querySelectorAll('.element')[0];

      text.style.left = parseInt(text.style.left) - Math.random() * 100 + 'px'; // parseInt là chuyển đổi thành số nguyên
      text.style.top = parseInt(text.style.top) - Math.random() * 100 + 'px';
      text.style.opacity = 0;
      text.style.transform = 'scale(0.4)';
      text.innerHTML = '🐻‍❄️';
      text.style.zIndex = '100';

      setTimeout(() => {
        ele.remove();
      }, 2000);
    }, 5);
  }

  document.onmousemove = function (e) {
    getHeart(e);
  };

  document.onclick = function (e) {
    console.log(`chuột toạ độ x: ${e.clientX}, chuột toạ độ y: ${e.clientY}`);

    let ele = document.createElement('div');
    ele.className = 'heartRain';
    document.querySelector('body').prepend(ele);
    ele.style.left = e.clientX - 10 + 'px';
    ele.style.top = e.clientY - 10 + 'px';
    ele.innerHTML = '🎁';
    setTimeout(() => {
      ele.style.top = 'calc(95% - 25px)';
    }, 100);
    setTimeout(() => {
      ele.style.opacity = 0;
    }, 3000);
    setTimeout(() => {
      ele.remove();
    }, 4000);
  };
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
