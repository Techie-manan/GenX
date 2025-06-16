import { useEffect, useState } from "react";

const targetDate = new Date("2025-09-12T09:00:00").getTime();

function Countdown() {
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const total = targetDate - new Date().getTime();
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { total, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-4 justify-center items-center flex-wrap p-4">
            <TimeBox label="Days" value={timeLeft.days} />
            <TimeBox label="Hours" value={timeLeft.hours} />
            <TimeBox label="Mins" value={timeLeft.minutes} />
            <TimeBox label="Secs" value={timeLeft.seconds} />
        </div>
    );
}

function TimeBox({ label, value }) {
    return (
        <>
            
                <div className="backdrop-blur-md aspect-square p-1 h-17 rounded-2xl border border-[rgba(95,95,113,0.22)] shadow-[inset_0_0_16px_rgba(255,255,255,0.08)]">
                    <div className="text-xl font-semibold text-white">{value.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-gray-300 mt-1 uppercase tracking-widest">{label}</div>
                </div>
       
        </>
    );
}

export default Countdown;
