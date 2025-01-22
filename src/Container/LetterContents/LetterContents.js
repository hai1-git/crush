import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './LetterContents.module.scss';
import GifLetter from './GifLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function LetterContents() {
  const [openHeart, setOpenHeart] = useState(false);
  const [cloud, setCloud] = useState([]);
  const [gifBox, setGifBox] = useState(false);
  const [meme, setMeme] = useState('');

  // Hàm xử lý nút trái tim
  const handleBtnHeart = () => {
    setOpenHeart(!openHeart);
    const anmCar = document.getElementById('anmCar');

    const top = Math.floor(Math.random() * (window.innerHeight - 250));
    const left = Math.floor(Math.random() * (window.innerWidth - 250));

    anmCar.style.top = `${top}px`;
    anmCar.style.left = `${left}px`;

    // Tạo phần tử đám mây
    const newCloud = {
      top: top,
      left: left,
      zIndex: Math.floor((Math.random() + 5000) * 9998),
      zIndexGif: Math.floor(Math.random() * 4999),
    };

    setCloud((prevCloud) => [...prevCloud, newCloud]);
  };

  // Kiểm tra và làm rỗng danh sách đám mây khi vượt quá 100
  useEffect(() => {
    if (cloud.length > 100) {
      setCloud([]);
    }
  }, [cloud]);

  // Sự kiện khi ấn vào hộp quà
  const handleGifBox = () => {
    const memeLoveArray = ['memelove', 'memelove2', 'memelove3', 'memelove4', 'memelove5', 'memelove6', 'memelove7'];
    const randomIndex = Math.floor(Math.random() * memeLoveArray.length);
    setMeme(memeLoveArray[randomIndex]);
    setGifBox(true);
  };

  // Đóng GIF box
  const closeGifBox = () => {
    setGifBox(false);
  };

  return (
    <>
      <div id="letterContents" className={cx('letterContents')}>
        <div className={cx('letter-1', 'letters')}>
          <div className={cx('img1-letter_1')}></div>
          <div className={cx('text-letter_1')}>
            <span className={cx('span-text_letter')}>chúc em luôn xinh đẹp, mãi mãi trong tim anh😙😙😙</span>
          </div>
          <div className={cx('cat-gif')}></div>
        </div>
        <div
          className={cx('letter-2', 'letters', {
            openHeart: openHeart,
          })}
        >
          <div onClick={handleBtnHeart} className={cx('button-heart')}></div>
        </div>
      </div>

      {/* Mèo */}
      <div id="anmCar" className={cx('anmCar')}></div>

      {/* Tạo đám mây */}
      {cloud.map((item, index) => (
        <div className={cx('backgrCloud')} key={index}>
          <div
            style={{
              left: `${item.left}px`,
              zIndex: `${item.zIndex}`,
            }}
            id="anmCloud"
            className={cx('anmCloud')}
          >
            <div
              onClick={handleGifBox}
              style={{
                zIndex: `${item.zIndexGif}`,
              }}
              className={cx('gifbox')}
            ></div>
          </div>
        </div>
      ))}

      {/* Hiển thị hộp quà GIF */}
      {gifBox && (
        <>
          <GifLetter meme={meme} />
          <FontAwesomeIcon
            className={cx('btnCloseGif')}
            icon={faClose}
            onClick={closeGifBox} // Đóng hộp khi bấm vào icon
          />
        </>
      )}
    </>
  );
}

export default LetterContents;
