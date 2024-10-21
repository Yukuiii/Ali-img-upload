import Head from "./component/head";
import UploadPage from "./component/uploadPage";
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  return (
    <>
      <div className=" w-full h-full container">
        <div className="mx-auto px-4 flex w-[80%] flex-col items-center justify-center">
          <Head />
          <UploadPage />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        limit={1}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        closeButton={false}
        transition={Zoom}
      />
    </>
  )
}

export default App
