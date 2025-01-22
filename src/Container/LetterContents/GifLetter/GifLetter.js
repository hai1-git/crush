import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './GifLetter.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function GifLetter(meme) {
  const handleClickMeme = () => {};

  return (
    <>
      <div className={cx('GifLetter')}>
        <div style={{ backgroundImage: `url(/image/${meme.meme}.jpg)` }} className={cx('content-Letter')}>
          <div onClick={handleClickMeme} className={cx('img-icon')}></div>
          <div className={cx('rose', 'rose-1')}></div>
          <div className={cx('rose', 'rose-2')}></div>
        </div>
      </div>
    </>
  );
}

export default GifLetter;
