import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
         <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
         />
      </div>
   );
};

export default Loader;