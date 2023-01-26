import { FidgetSpinner } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.overlay}>
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
        ballColors={['#bfffc7', '#555555', '#e5e5e5']}
        backgroundColor="#18a5a7"
      />
    </div>
  );
};
