import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (t:string) => toast(t);

export default function NotifyComponent() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
