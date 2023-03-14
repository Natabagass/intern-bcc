import { useTimer } from 'react-timer-hook';
import Swal from 'sweetalert2';

const Timer = () => {
    const time = new Date();
    time.setHours(time.getHours() + 24);

    const { seconds, minutes, hours } = useTimer({
        expiryTimestamp: time, onExpire: () => {
            Swal.fire({
                icon: 'error',
                title: 'Pembayaran gagal',
                text: 'Silahkan Hubungi pemilik gedung atau booking ulang'
            })
        }
    });

    return (
        <>
            <h2 className='text-[#F78CB2] mt-3 text-right'>{hours}:{minutes}:{seconds}</h2>
        </>
    );
}

export default Timer;