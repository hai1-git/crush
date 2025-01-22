import classNames from 'classnames/bind';
import styles from './Container.module.scss';
import { useState } from 'react';
import LetterContents from './LetterContents';

const cx = classNames.bind(styles);

function Container() {
  const [letter, checkLetter] = useState(false);
  const [letterHide, checkLetterHide] = useState(false);
  const [letterCotent, checkLetterContent] = useState(false);

  const handleLetter = () => {
    const divLetter = document.getElementById('letter');
    console.log(divLetter);

    checkLetter(true); // Cập nhật trạng thái khi click vào phần tử
    setTimeout(() => {
      checkLetterHide(true); // Cập nhật trạng thái khi lá thư đã biến mất
    }, 1200);
    setTimeout(() => {
      checkLetterContent(true); // Cập nhật trạng thái khi nội dung lá thư đã hiện
    }, 1600);
  };

  return (
    <div className={cx('Container-letter')}>
      {/* lá thư */}
      {
        // Nếu click vào lá thư, lá thư sẽ mất và hiện nội dung lá thư
        !letterHide && (
          <div
            id="letter"
            onClick={handleLetter}
            className={cx('letter', {
              hide: letter,
            })}
          >
            <div className={cx('cursor-letter')}></div>
          </div>
        )
      }
      {
        // Hiện nội dung lá thư nếu đã click vào
        letterCotent && <LetterContents />
      }
    </div>
  );
}

export default Container;
